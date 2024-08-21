import express from "express";
import { createUser } from "./auth.controller";

const router = express.Router();

router.post("/register", createUser);
router.get("/login", (req, res) => {
  res.json("Hello");
});

const authRoutes = router;

export default authRoutes;
