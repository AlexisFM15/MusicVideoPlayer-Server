import { Response, Request } from "express";
import Music from "../models/Music.model";
import fs from "fs"
import path  from "path";

export async function createSong(req: Request, res: Response) {
  const { title, description } = req.body;

  const newMusic = {
    title: title,
    description: description,
    musicPath: req.file?.path,
  };

  const music = new Music(newMusic);
  await music.save();

  res.json({
    music,
    message: "songs added",
  });
}

export async function getSongs(
  _req: Request,
  res: Response
): Promise<Response> {
  const songs = await Music.find().sort({ title: "asc" });
  return res.json({
    songs,
    message: "success",
  });
}

export async function getSong(req: Request, res: Response): Promise<Response> {
  const song = await Music.findById(req.params.id);
  return res.status(200).json({
    song,
    message: "Song found",
  });
}

export async function deleteSong(
  req: Request,
  res: Response
): Promise<Response> {
  const song = await Music.findByIdAndDelete(req.params.id);
  const link = path.resolve(`${song?.musicPath}`)
   fs.unlink(`${link}`,(err)=>{
    
  })
  return res.json({
    song,
    message: "song deleted",
  });
}

export async function UpdateSong(
  req: Request,
  res: Response
): Promise<Response> {
  const { title, description } = req.body;
  const EditSong = {
    title: title,
    description: description,
  };
  const song = await Music.findByIdAndUpdate(req.params.id, EditSong);
  return res.json({
    song,
    message: "song updated",
  });
}

export async function DownloadSong(req:Request, res:Response) {
    const song = await Music.findById(req.params.id)
    res.download(`${song?.musicPath}`,`${song?.title}.mp3`)
}