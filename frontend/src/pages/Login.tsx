import React, { useState } from "react";
import styled from "@emotion/styled";
import useUserStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 300px;
	margin: 0 auto;
`;

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const userStore = useUserStore();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			await userStore.login(email, password);
			navigate("/");
		} catch (error) {
			console.log("Erreur lors de la connection ", error);
		}
	};

	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<FormContainer>
					<input
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						required
					/>
					<input
						type="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						required
					/>
					<button type="submit" disabled={userStore.loading}>
						{userStore.loading ? "Chargement..." : "Se connecter"}
					</button>
				</FormContainer>
			</form>
		</div>
	);
};

export default Login;
