import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/login", authRoutes);

console.log(process.env.JWT_SECRET, "test");

app.listen(5001, "0.0.0.0", () => {
	console.log("Server is running on port 5001");
	console.log("Mon secret vaut :", process.env.JWT_SECRET);
});
