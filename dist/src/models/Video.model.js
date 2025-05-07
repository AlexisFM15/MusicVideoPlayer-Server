"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VideoSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    VideoPath: String
});
exports.default = (0, mongoose_1.model)('video', VideoSchema);
