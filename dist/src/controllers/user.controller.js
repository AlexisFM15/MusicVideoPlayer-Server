"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = getUsers;
exports.getUser = getUser;
exports.createUser = createUser;
exports.deleteUser = deleteUser;
exports.UpdateUser = UpdateUser;
const User_model_1 = __importDefault(require("../models/User.model"));
const bcrypt_1 = require("../libs/bcrypt");
const database_1 = require("../database/database");
async function getUsers(_req, res) {
    await (0, database_1.DBconect)();
    const user = await User_model_1.default.find();
    return res.json({
        user,
        message: 'Users List',
    });
}
async function getUser(req, res) {
    const user = await User_model_1.default.findById(req.params.id);
    return res.json({
        user,
        message: 'user Found',
    });
}
async function createUser(req, res) {
    const { user, password } = req.body;
    const newUser = {
        user: user,
        password: (0, bcrypt_1.hashPassword)(password),
    };
    console.log((0, bcrypt_1.hashPassword)(password));
    const user1 = new User_model_1.default(newUser);
    await user1.save();
    return res.json({
        newUser,
    });
}
async function deleteUser(req, res) {
    const user = await User_model_1.default.findByIdAndDelete(req.params.id);
    return res.json({
        user,
        message: 'user Deleted',
    });
}
async function UpdateUser(req, res) {
    const { user, password } = req.body;
    const userToUpdate = {
        user: user,
        password: (0, bcrypt_1.hashPassword)(password),
    };
    const userChanged = await User_model_1.default.findByIdAndUpdate(req.params.id, userToUpdate);
    return res.json({
        userChanged,
        message: 'user updated',
    });
}
