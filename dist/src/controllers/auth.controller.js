"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
exports.logout = logout;
const User_model_1 = __importDefault(require("../models/User.model"));
const bcrypt_1 = require("../libs/bcrypt");
const jwt_1 = require("../libs/jwt");
async function register(req, res) {
    const { user, password } = req.body;
    const newUser = {
        user: user,
        password: (0, bcrypt_1.hashPassword)(password),
    };
    const userAdd = new User_model_1.default(newUser);
    await userAdd.save();
    const token = (0, jwt_1.createToken)(newUser);
    res.cookie('token', token).json({
        userAdd,
        message: 'register complete',
    });
}
async function login(req, res) {
    const { user, password } = req.body;
    try {
        const findUser = {
            user: user,
        };
        const userFound = await User_model_1.default.findOne(findUser);
        if (!userFound)
            return res.json({ message: 'user not found' });
        if (!(0, bcrypt_1.uncodePassword)(password, userFound.password))
            return res.json({ message: 'Password invalid' });
        const token = (0, jwt_1.createToken)(findUser);
        res
            .cookie('token', token)
            .json({ userFound, message: 'login success', token });
    }
    catch (err) {
        res.json(err);
    }
}
async function logout(_req, res) {
    res.cookie('token', '');
    return res.json({ message: 'logout successfuly' });
}
