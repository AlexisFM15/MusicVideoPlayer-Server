"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRequired = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AuthRequired = (req, res, next) => {
    try {
        const token = req.cookies["token"];
        if (!token)
            return res.status(401).send("Invalid token, Access denied");
        const payload = jsonwebtoken_1.default.verify(token, "alexis");
        req.body = payload.user;
        return next();
    }
    catch (error) {
        console.log(error);
        return res.status(400).send("Invalid token");
    }
};
exports.AuthRequired = AuthRequired;
