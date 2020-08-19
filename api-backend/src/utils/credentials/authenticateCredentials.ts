import bcrypt from 'bcryptjs'

export default async function authenticateCredentials(password:string, userpassword:string) {
    let authentication = bcrypt.compareSync(password, userpassword)
    if (authentication === true) { return(true) }
    if (authentication === false) { return(false) }
}