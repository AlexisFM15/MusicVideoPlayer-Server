import { RequestHandler } from "express";


interface IuserMiddle {
    user: String
}

export const parseuery:RequestHandler = (req,res,next)=>{
    const formateed:IuserMiddle ={ user: req.query.user as String}    
    
    req.body = formateed
    next()
}