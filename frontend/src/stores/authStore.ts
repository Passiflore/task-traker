import { create } from "zustand";
import { loginUser, registerUser } from "../services/api";

interface AuthStore {
	isAuth: boolean;
	token: string | null;
	user: { email: string; id: string } | null;
	error: string | null;
	loading: boolean;

	login: (email: string, password: string) => Promise<void>;
	register: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

const useUserStore = create<AuthStore>((set) => ({
	isAuth: localStorage.getItem("token") ? true : false,
	token: localStorage.getItem("token"),
	user: null,
	error: null,
	loading: false,

	login: async (email, password) => {
		set({ loading: true, error: null });
		try {
			const response = await loginUser({ email, password });
			const token = response.data;

			localStorage.setItem("token", token);

			set({
				isAuth: true,
				token: token,
				loading: false,
			});
		} catch (error) {
			set({
				error: error.response?.data?.message || "Erreur de connexion",
				loading: false,
			});
		}
	},

	register: async (email, password) => {
		set({ loading: true, error: null });
		try {
			await registerUser({ email, password });
			set({ loading: false });

			await useUserStore.getState().login(email, password);
		} catch (error) {
			set({
				error: error.response?.data?.message || "Erreur d'inscription",
				loading: false,
			});
		}
	},

	logout: () => {
		localStorage.removeItem("token");
		set({
			isAuth: false,
			token: null,
			user: null,
		});
	},
}));

export default useUserStore;
