import React from "react";
import useUserStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

const Register = () => {
	const login = useUserStore((state) => state.login);
	const navigate = useNavigate();

	const handleLogin = () => {
		login();
		navigate("/");
	};
	return (
		<div>
			<h1>Register</h1>

			<button onClick={handleLogin}>S'inscrire</button>
		</div>
	);
};

export default Register;
