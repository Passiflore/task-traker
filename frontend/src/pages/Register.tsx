import React, { useState } from "react";
import useUserStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	max-width: 300px;
	margin: 0 auto;
`;

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const register = useUserStore((state) => state.register);

	const loading = useUserStore((state) => state.loading);
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await register(email, password);
			navigate("/");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<h1>Inscription</h1>
			<form onSubmit={handleRegister}>
				<FormContainer>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Entrez votre email"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Entrez votre mot de passe"
						required
					/>
					<button type="submit" disabled={loading}>
						{loading ? "Chargement..." : "S'inscrire"}
					</button>
				</FormContainer>
			</form>
		</div>
	);
};

export default Register;
