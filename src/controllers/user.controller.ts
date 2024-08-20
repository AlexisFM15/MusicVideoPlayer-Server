import { Request, Response } from "express";
import User from "../models/User.model";
import { hashPassword } from "../libs/bcrypt";

export async function getUsers(_req: Request, res: Response): Promise<Response>{
    const user = await User.find()

    return res.json({
        user,
        message:"Users List"
    })
}

export async function getUser(req: Request, res: Response): Promise<Response>{
    const user = await User.findById(req.params.id)

    return res.json({
        user,
        message:"user Found"
    })
}

export async function createUser(req:Request, res: Response): Promise<Response> {
    const {user, password} = req.body

    const newUser= {
            user:user,
            password: hashPassword(password)
    }
    console.log(hashPassword(password))
    const user1 = new User(newUser)
    await user1.save()  
    return res.json({
        newUser
    })
}

export async function deleteUser(req:Request, res: Response): Promise<Response> {
    const user = await User.findByIdAndDelete(req.params.id)

    return res.json({
        user,
        message: "user Deleted"
    })
    
}

export async function UpdateUser(req:Request , res: Response): Promise<Response>{
    const {user,password} = req.body
    
    const userToUpdate = {
        user: user,
        password: hashPassword(password)
    }
    const userChanged = await User.findByIdAndUpdate(req.params.id,userToUpdate)

    return res.json({
        userChanged,
        message:"user updated"
    })
}

