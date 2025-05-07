"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBconect = DBconect;
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const uricloud = 'mongodb+srv://malexfuture:malex1524@cluster0.m2yho7v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const uri = process.env.DB_URI;
console.log(process.env.DB_URI);
// 'mongodb://localhost/music-videoPlayer'
async function DBconect() {
    try {
        await mongoose_1.default.connect(uri, {});
    }
    catch (error) {
        console.log(error);
    }
}
