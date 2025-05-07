"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    user: String,
    password: String
});
exports.default = (0, mongoose_1.model)('User', userSchema);
