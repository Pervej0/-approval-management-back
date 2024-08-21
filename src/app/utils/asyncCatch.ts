/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";

const asyncCatch = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error: any) {
      console.log(error);
      next(error);
    }
  };
};

export default asyncCatch;
