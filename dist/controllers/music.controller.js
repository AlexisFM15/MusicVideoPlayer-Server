"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSong = createSong;
exports.getSongs = getSongs;
exports.getSong = getSong;
exports.deleteSong = deleteSong;
exports.UpdateSong = UpdateSong;
exports.DownloadSong = DownloadSong;
const Music_model_1 = __importDefault(require("../models/Music.model"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
async function createSong(req, res) {
    const { title, description } = req.body;
    const newMusic = {
        title: title,
        description: description,
        musicPath: req.file?.path,
    };
    const music = new Music_model_1.default(newMusic);
    await music.save();
    res.json({
        music,
        message: "songs added",
    });
}
async function getSongs(_req, res) {
    const songs = await Music_model_1.default.find().sort({ title: "asc" });
    return res.json({
        songs,
        message: "success",
    });
}
async function getSong(req, res) {
    const song = await Music_model_1.default.findById(req.params.id);
    return res.status(200).json({
        song,
        message: "Song found",
    });
}
async function deleteSong(req, res) {
    const song = await Music_model_1.default.findByIdAndDelete(req.params.id);
    const link = path_1.default.resolve(`${song?.musicPath}`);
    fs_1.default.unlink(`${link}`, (err) => {
    });
    return res.json({
        song,
        message: "song deleted",
    });
}
async function UpdateSong(req, res) {
    const { title, description } = req.body;
    const EditSong = {
        title: title,
        description: description,
    };
    const song = await Music_model_1.default.findByIdAndUpdate(req.params.id, EditSong);
    return res.json({
        song,
        message: "song updated",
    });
}
async function DownloadSong(req, res) {
    const song = await Music_model_1.default.findById(req.params.id);
    res.download(`${song?.musicPath}`, `${song?.title}.mp3`);
}
