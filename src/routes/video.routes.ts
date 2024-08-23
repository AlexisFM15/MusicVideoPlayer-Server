import { Router } from "express";
import {
  createvideo,
  deletevideo,
  Downloadvideo,
  getvideo,
  getvideos,
  Updatevideo,
} from "../controllers/video.controller";
import multer from "../libs/multer";
import { AuthRequired } from "../middleware/Auth.middleware";
import { videoFilter } from "../middleware/video.middleware";

const router = Router();

router
  .post("/video",AuthRequired, multer.single("video"), createvideo)
  .get("/video",AuthRequired,videoFilter, getvideos);
router.get("/video/:id",AuthRequired, getvideo);
router.delete("/video/:id",AuthRequired, deletevideo);
router.patch("/video/:id",AuthRequired, Updatevideo);
router.get("/video/download/:id",AuthRequired, Downloadvideo);

export default router
