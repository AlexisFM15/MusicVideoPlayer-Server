import { Response, Request } from "express";
import Video from "../models/Video.model";
import fs from "fs"
import path  from "path";

export async function createvideo(req: Request, res: Response) {
  const { title, description } = req.body;

  const newVideo = {
    title: title,
    description: description,
    VideoPath: req.file?.path,
  };

  const video = new Video(newVideo);
  await video.save();

  res.json({
    video,
    message: "videos added",
  });
}

export async function getvideos(
  _req: Request,
  res: Response
): Promise<Response> {
  const videos = await Video.find().sort({ title: "asc" });
  return res.json({
    videos,
    message: "success",
  });
}

export async function getvideo(req: Request, res: Response): Promise<Response> {
  const video = await Video.findById(req.params.id);
  return res.status(200).json({
    video,
    message: "video found",
  });
}

export async function deletevideo(
  req: Request,
  res: Response
): Promise<Response> {
  const video = await Video.findByIdAndDelete(req.params.id);
  const link = path.resolve(`${video?.VideoPath}`)
   fs.unlink(`${link}`,(err)=>{
    
  })
  return res.json({
    video,
    message: "video deleted",
  });
}

export async function Updatevideo(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;
  const Editvideo = {
    title: title,
    description: description,
  };
  const video = await Video.findByIdAndUpdate(req.params.id, Editvideo);
  return res.json({
    video,
    message: "video updated",
  });
}

export async function Downloadvideo(req:Request, res:Response) {
    const video = await Video.findById(req.params.id)
    res.download(`${video?.VideoPath}`,`${video?.title}.mp4`)
}