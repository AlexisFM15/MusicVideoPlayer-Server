import { Request, Response } from "express";
import User from "../models/User.model";
import { hashPassword, uncodePassword } from "../libs/bcrypt";
import { createToken } from "../libs/jwt";

export async function register(req: Request, res: Response) {
  const { user, password } = req.body;

  const newUser = {
    user: user,
    password: hashPassword(password),
  };

  const userAdd = new User(newUser);
  await userAdd.save();

  const token = createToken(newUser)

  res.cookie("token", token,{
    httpOnly: true, // la cookie solo se accede desde el servidor
    sameSite: 'strict', // solo se puede acceder en el mismo dominio
    //maxAge: 1000 * 60 * 60 //tiempo de validez de una hora
  }).json({
    userAdd,
    message: "register complete",
  });
}

export async function login(req: Request, res: Response) {
  const { user, password } = req.body;
  try {
    const findUser = {
      user: user,
    };
    const userFound = await User.findOne(findUser);
    if (!userFound) return res.json({ message: "user not found" });

    if (!uncodePassword(password, userFound.password))
      return res.json({ message: "Password invalid" });

    const token = createToken(findUser) 

    res.cookie("token", token).json({ userFound, message: "login success" });
  } catch (err) {
    res.json(err);
  }
}

export async function logout(_req: Request, res: Response): Promise<Response> {
  res.cookie("token", "");

  return res.json({ message: "logout successfuly" });
}
