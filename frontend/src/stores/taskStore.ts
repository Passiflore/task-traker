import { create } from "zustand";
import { User } from "./authStore";
import { createTask, fetchTasks } from "../services/api";

interface Task {
	id: string;
	title: string;
	description: string;
	status: "à faire" | "en cours" | "terminé";
	user: User;
	createdAt: string;
}

interface TaskStore {
	tasks: Task[];
	selectedTask: Task | null;
	loading: boolean;
	error: string | null;

	getTask: (userId: string) => Promise<void>;
	createTask: (
		title: string,
		description: string,
		user: string
	) => Promise<void>;
}

const useTaskStore = create<TaskStore>((set, get) => ({
	tasks: [],
	selectedTask: null,
	loading: false,
	error: null,

	getTask: async (userId) => {
		set({ loading: true, error: null });
		try {
			const response = await fetchTasks({ userId });

			set({
				tasks: response.data,
				loading: false,
			});
		} catch (error) {
			set({
				error:
					error.response?.data?.message ||
					"Erreur lors de la réccupération des tâches",
				loading: false,
			});
		}
	},
	createTask: async (title, description) => {
		set({ loading: true, error: null });
		try {
			const response = await createTask({ title, description });
			console.log(response, "réponse");
			const newTask = response.data.task;

			const currentTasks = get().tasks;

			set({
				tasks: [...currentTasks, newTask],
				loading: false,
			});
		} catch (error) {
			set({
				error:
					error.response?.data?.message ||
					"Erreur lors de la création de la tâche",
				loading: false,
			});
		}
	},
}));

export default useTaskStore;
