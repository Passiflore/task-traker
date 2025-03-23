import { create } from "zustand";

interface AuthStore {
	isAuth: boolean;
	login: () => void;
	logout: () => void;
}

const useUserStore = create<AuthStore>((set) => ({
	isAuth: false,
	login: () => set(() => ({ isAuth: true })),
	logout: () => set(() => ({ isAuth: false })),
}));

export default useUserStore;
