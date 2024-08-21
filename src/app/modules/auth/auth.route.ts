import express from "express";
import { createUser, login } from "./auth.controller";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", login);

const authRoutes = router;

export default authRoutes;
