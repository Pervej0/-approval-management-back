import express from "express";

const router = express.Router();

const allRoutes = [
  {
    route: "",
  },
];

allRoutes.forEach((rt) => router.use("/api", rt?.route));

const rootRoute = router;
export default rootRoute;
