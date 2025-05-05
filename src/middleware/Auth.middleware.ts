import { RequestHandler } from 'express'
import jwt from 'jsonwebtoken'

interface IPayload {
  user: string
  password: string
  iat: number
}

export const AuthRequired: RequestHandler = (req, res, next) => {
  try {
    const token = req.cookies['token']
    if (!token) return res.status(401).send('Invalid token, Access denied')
    const payload = jwt.verify(token, 'alexis') as IPayload
    req.body = payload.user
    return next()
  } catch (error) {
    console.log(error)
    return res.status(400).send('Invalid token')
  }
}
