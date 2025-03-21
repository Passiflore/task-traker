import Task from "../models/Task.js";

export async function getTasks(req, res) {
	try {
		const tasks = await Task.find({ user: req.user.id });
		res.json(tasks);
	} catch {
		res.status(500).json({ message: "Erreur lors de la récupération des tâches" });
	}
}

export async function createTask(req, res) {
	try {
		const { title, description } = req.body;

		const newTask = await Task.create({
			title,
			description,
			// user: req.user.id,
		});

		await newTask.save();

		res.status(201).json({
			message: "Tâche créée avec succès",
			task: { title: newTask.title, description: newTask.description },
		});
		res.status(201).json(newTask);
	} catch {
		res.status(500).json({ message: "Erreur lors de la création de la tâche" });
	}
}
