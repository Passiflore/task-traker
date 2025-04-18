import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	status: {
		type: String,
		default: "à faire",
	},
	// user: {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "User",
	// 	required: true,
	// },
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
