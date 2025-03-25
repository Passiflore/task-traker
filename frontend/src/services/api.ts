import axios from "axios";

const API_URL = "http://localhost:5001";

const api = axios.create({
	baseURL: API_URL,
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export const loginUser = (credentials) => api.post("/auth/login", credentials);
export const registerUser = (userData) => api.post("/auth/register", userData);
export const fetchTasks = (userData) => api.get("/tasks/getTasks", userData);
export const createTask = (taskData) => api.post("/tasks/createTask", taskData);

export default api;
