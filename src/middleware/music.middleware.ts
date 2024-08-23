import { Request, Response, NextFunction } from "express";

interface ImusicMiddleware {
  title: String;
  description: String;
}

export function musicFilter(req: Request, res: Response, next: NextFunction) {
  const musicFilters: ImusicMiddleware = {
    title: req.query.title as String,
    description: req.query.description as String,
  };

  req.body = musicFilters
  next()
}
