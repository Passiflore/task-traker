import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

app.get("/api/dbstatus", (req, res) => {
	res.json({
		connected: mongoose.connection.readyState === 1,
		dbName: mongoose.connection.name,
	});
});

app.listen(5001, "0.0.0.0", () => {
	console.log("Server is running on port 5001");
});
