import express, { NextFunction, Request, Response } from "express";
import upload from "../../../../multer-config";
import { createApprovalFiles } from "./approval-files.controller";
const route = express();

route.post(
  "/create",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  createApprovalFiles
);

route.get("/");

const approvalLetterRoutes = route;
export default approvalLetterRoutes;
