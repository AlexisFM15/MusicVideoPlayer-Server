import { Request, Response, NextFunction } from "express";

interface IvideoMiddleware {
  title: String;
  description: String;
}

export function videoFilter(req: Request, res: Response, next: NextFunction) {
  const videoFilters: IvideoMiddleware = {
    title: req.query.title as String,
    description: req.query.description as String,
  };

  req.body = videoFilters
  next()
}