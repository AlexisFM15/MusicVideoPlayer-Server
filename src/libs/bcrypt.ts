import bcrypt from 'bcrypt'

export function hashPassword(pass:string){
    const salt =  bcrypt.genSaltSync(10)
    const passwordHashed = bcrypt.hashSync(pass,salt)
    return passwordHashed
}

export function uncodePassword(pass:string, passCompare: string){
    const passwordUncoded = bcrypt.compareSync(pass,passCompare)
    return passwordUncoded
}