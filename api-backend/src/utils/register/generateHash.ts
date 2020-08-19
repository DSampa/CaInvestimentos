import bcrypt from 'bcryptjs';

export default async function generateHash(password:string){
    try {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password,salt)
        return({status: true, data: hash})
    } catch (error) {
        return({status: false, data: `Erro: ${error}`})
    }
}