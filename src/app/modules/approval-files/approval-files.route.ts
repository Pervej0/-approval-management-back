import express from "express";
import { uploadImageCloud } from "./approval-files.utils";
const route = express();

route.post("/create", uploadImageCloud);

const approvalLetterRoutes = route;
export default approvalLetterRoutes;
