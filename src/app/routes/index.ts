import express from "express";
import authRoutes from "../modules/auth/auth.route";
import approvalLetterRoutes from "../modules/approval-files/approval-files.route";

const router = express.Router();

const allRoutes = [
  {
    path: "users",
    route: authRoutes,
  },
  {
    path: "approval",
    route: approvalLetterRoutes,
  },
];

allRoutes.forEach((item) => router.use(`/api/v1/${item.path}`, item?.route));

const rootRoute = router;
export default rootRoute;
