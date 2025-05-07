"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const video_controller_1 = require("../controllers/video.controller");
const multer_1 = __importDefault(require("../libs/multer"));
const router = (0, express_1.Router)();
router
    .post("/video", multer_1.default.single("video"), video_controller_1.createvideo)
    .get("/video", video_controller_1.getvideos);
router.get("/video/:id", video_controller_1.getvideo);
router.delete("/video/:id", video_controller_1.deletevideo);
router.patch("/video/:id", video_controller_1.Updatevideo);
router.get("/video/download/:id", video_controller_1.Downloadvideo);
exports.default = router;
