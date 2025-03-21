import { createUser, login } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/login", login);
router.post("/register", createUser);

export default router;
