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

const router = Router();

router
  .post("/music", multer.single("music"), createSong)
  .get("/music",AuthRequired, getSongs);
router.get("/music/:id", getSong);
router.delete("/music/:id", deleteSong);
router.patch("/music/:id", UpdateSong);
router.get('/music/download/:id',DownloadSong)

export default router;
