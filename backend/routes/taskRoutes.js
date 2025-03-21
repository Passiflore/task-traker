import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getTasks, createTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/getTasks", authMiddleware, getTasks);
router.post("/createTask", authMiddleware, createTask);
// router.put("/:id", authMiddleware, updateTask);
// router.delete("/:id", authMiddleware, deleteTask);

export default router;
