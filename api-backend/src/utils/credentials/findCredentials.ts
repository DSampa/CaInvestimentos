import db from "../../database/config/connections";

export default async function findCredentials(email:string){
    let user = await db.select('*').from('funcionario_credentials').where({funcionario_credentials_email: email})
        .then((rows) => {return rows[0]});
    if(user === undefined){
        return ({status: false})
    } else {
        return ({status: true, user})
    }
}