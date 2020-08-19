import { Request, Response } from 'express';
import db from '../../database/config/connections';
import generateHash from '../../utils/register/generateHash';
import findCredentials from '../../utils/credentials/findCredentials';
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'

export default class FuncionarioControllers {
    async login(req: Request, res: Response) {
        let data = await findCredentials(req.body.email).then()
        if (data.status === true) {
            let authentication = bcrypt.compareSync(req.body.password, data.user.funcionario_credentials_password);
            let IP = req.ip;
            let token = JWT.sign({ IP }, process.env.SECRET as string, { expiresIn: 300 });
            if (authentication === true) {
                let user = await db.select('*').from('funcionarios').where({ id_funcionario: data.user.id_funcionario })
                user = user[0];
                res.status(200).json({ success: true, date: new Date(Date.now()), token, user })
            }
            if (authentication === false) { res.status(200).json({ message: "Email or password is incorrect" }) }
        } else {
            res.status(200).json({ message: "Email or password is incorrect" })
        }
    }
    async index(req: Request, res: Response) {
        if (req.body.id) {
            try {
                const users = await db.select('*').from('funcionarios').where({ id_funcionario: req.body.id })
                res.status(200).json({ message: "Success", users })
            } catch (error) {
                res.status(200).json({ message: `Error while fetching users ${error}` })
            }
        } else {
            try {
                const users = await db.select('*').from('funcionarios')
                res.status(200).json({ message: "Success", users })
            } catch (error) {
                res.status(200).json({ message: `Error while fetching users ${error}` })
            }
        }
    }
    async create(req: Request, res: Response) {
        const {
            funcionario_firstname,
            funcionario_lastname,
            funcionario_surname,
            funcionario_cpf,
            funcionario_rg,
            funcionario_avatar,
            funcionario_age,
            funcionario_credentials_email,
            funcionario_credentials_password,
            funcionario_street_name,
            funcionario_district,
            funcionario_street_complement,
            funcionario_postal_code,
            funcionario_street_number,
            funcionario_city,
            funcionario_state
        } = req.body
        let exists = await findCredentials(funcionario_credentials_email)
        if (exists.status === false) {
            try {
                db.transaction(async (trx) => {
                    let id_funcionario = await trx('funcionarios').insert({
                        funcionario_firstname,
                        funcionario_lastname,
                        funcionario_surname,
                        funcionario_cpf,
                        funcionario_rg,
                        funcionario_avatar,
                        funcionario_age
                    });
                    let hash = await generateHash(funcionario_credentials_password)
                    await trx('funcionario_credentials').insert({
                        funcionario_credentials_email,
                        funcionario_credentials_password: hash.data,
                        id_funcionario
                    });
                    await trx('funcionario_address').insert({
                        funcionario_street_name,
                        funcionario_district,
                        funcionario_street_complement,
                        funcionario_postal_code,
                        funcionario_street_number,
                        funcionario_city,
                        funcionario_state,
                        id_funcionario
                    });
                }).then(() => {
                    res.status(201).json({ message: "User created successfully" })
                }).catch((error) => {
                    res.status(400).json({ message: `Error while creating user, ${error}` })
                })               
            } catch (error) {
                res.status(400).json({ message: `Error while creating user, ${error}` })
            }
        } else {
            res.status(200).json({ message: "Email in use" })
        }
    }
}