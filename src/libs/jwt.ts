import jwt from "jsonwebtoken"

export function createToken(data:object){
    const token = jwt.sign(data,'alexis',{expiresIn: '1 day'})
    return token
}