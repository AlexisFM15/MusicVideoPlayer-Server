import { Router } from "express";
import {
  createSong,
  deleteSong,
  DownloadSong,
  getSong,
  getSongs,
  UpdateSong,
} from "../controllers/music.controller";
import multer from "../libs/multer";
import { AuthRequired } from "../middleware/Auth.middleware";
import { musicFilter } from "../middleware/music.middleware";

const router = Router();

router
  .post("/music",AuthRequired, multer.single("music"), createSong)
  .get("/music",AuthRequired,musicFilter, getSongs);
router.get("/music/:id",AuthRequired, getSong);
router.delete("/music/:id",AuthRequired, deleteSong);
router.patch("/music/:id",AuthRequired, UpdateSong);
router.get('/music/download/:id',AuthRequired,DownloadSong)

export default router;
