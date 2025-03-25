import React, { useEffect, useState } from "react";
import { FormContainer } from "./Login";
import useTaskStore from "../stores/taskStore";
import useUserStore from "../stores/authStore";

const Dashboard = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const userInfo = useUserStore();
	const tasksStore = useTaskStore();

	const loading = useTaskStore((state) => state.loading);

	useEffect(() => {
		console.log("task", tasksStore.tasks);
	}, [tasksStore.tasks]);

	const handleNewTask = async (e) => {
		e.preventDefault();
		const userId = userInfo.user?.id;

		if (!userId) {
			console.log(userInfo);
			console.log("Erreur lors de la réccupération de l'user id");
			return;
		}

		try {
			await tasksStore.createTask(title, description, userId);
		} catch (error) {
			console.log("Erreur lors de la création de la tâche", error);
		}
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<ul>
				{tasksStore.tasks.map((task) => {
					return (
						<li>
							<span>{task.title}</span>
							<span>{task.description}</span>
							<span>{task.status}</span>
						</li>
					);
				})}
				<li>Tâches</li>
			</ul>

			<h3>Ajouter une nouvelle tâche</h3>
			<form onSubmit={handleNewTask}>
				<FormContainer>
					<label>
						Titre
						<input
							type="text"
							value={title}
							placeholder="Entrez un titre"
							onChange={(e) => setTitle(e.target.value)}
						></input>
					</label>
					<label>
						Descritption
						<input
							type="text"
							value={description}
							placeholder="Entrez une description"
							onChange={(e) => setDescription(e.target.value)}
						></input>
					</label>
					<label>
						Status
						<input
							type="text"
							value={status}
							placeholder="Entrez un Status"
						></input>
					</label>
					<button type="submit">
						{loading ? "Chargement..." : "Créer une nouvelle tâche"}
					</button>
				</FormContainer>
			</form>
		</div>
	);
};

export default Dashboard;
