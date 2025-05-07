"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createvideo = createvideo;
exports.getvideos = getvideos;
exports.getvideo = getvideo;
exports.deletevideo = deletevideo;
exports.Updatevideo = Updatevideo;
exports.Downloadvideo = Downloadvideo;
const Video_model_1 = __importDefault(require("../models/Video.model"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function createvideo(req, res) {
    const { title, description } = req.body;
    const newVideo = {
        title: title,
        description: description,
        VideoPath: req.file?.path,
    };
    const video = new Video_model_1.default(newVideo);
    await video.save();
    res.json({
        video,
        message: "videos added",
    });
}
async function getvideos(_req, res) {
    const videos = await Video_model_1.default.find().sort({ title: "asc" });
    return res.json({
        videos,
        message: "success",
    });
}
async function getvideo(req, res) {
    const video = await Video_model_1.default.findById(req.params.id);
    return res.status(200).json({
        video,
        message: "video found",
    });
}
async function deletevideo(req, res) {
    const video = await Video_model_1.default.findByIdAndDelete(req.params.id);
    const link = path_1.default.resolve(`${video?.VideoPath}`);
    fs_1.default.unlink(`${link}`, (err) => {
    });
    return res.json({
        video,
        message: "video deleted",
    });
}
async function Updatevideo(req, res) {
    const { title, description } = req.body;
    const Editvideo = {
        title: title,
        description: description,
    };
    const video = await Video_model_1.default.findByIdAndUpdate(req.params.id, Editvideo);
    return res.json({
        video,
        message: "video updated",
    });
}
async function Downloadvideo(req, res) {
    const video = await Video_model_1.default.findById(req.params.id);
    res.download(`${video?.VideoPath}`, `${video?.title}.mp4`);
}
