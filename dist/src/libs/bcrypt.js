"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
exports.uncodePassword = uncodePassword;
const bcrypt_1 = __importDefault(require("bcrypt"));
function hashPassword(pass) {
    const salt = bcrypt_1.default.genSaltSync(10);
    const passwordHashed = bcrypt_1.default.hashSync(pass, salt);
    return passwordHashed;
}
function uncodePassword(pass, passCompare) {
    const passwordUncoded = bcrypt_1.default.compareSync(pass, passCompare);
    return passwordUncoded;
}
