"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const music_controller_1 = require("../controllers/music.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const Auth_middleware_1 = require("../middleware/Auth.middleware");
const router = (0, express_1.Router)();
router
    .post("/music", multer_1.default.single("music"), music_controller_1.createSong)
    .get("/music", Auth_middleware_1.AuthRequired, music_controller_1.getSongs);
router.get("/music/:id", music_controller_1.getSong);
router.delete("/music/:id", music_controller_1.deleteSong);
router.patch("/music/:id", music_controller_1.UpdateSong);
router.get('/music/download/:id', music_controller_1.DownloadSong);
exports.default = router;
