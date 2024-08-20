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

const router = Router();

router
  .post("/video", multer.single("video"), createvideo)
  .get("/video", getvideos);
router.get("/video/:id", getvideo);
router.delete("/video/:id", deletevideo);
router.patch("/video/:id", Updatevideo);
router.get("/video/download/:id", Downloadvideo);

export default router
