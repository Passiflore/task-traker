import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../stores/authStore";

const Navigation = () => {
	const isAuth = useUserStore((state) => state.isAuth);
	const logout = useUserStore((state) => state.logout);
	const login = useUserStore((state) => state.login);
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate("/login");
	};

	return (
		<nav>
			<ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
				<li>
					<Link to="/">Accueil</Link>
				</li>

				{isAuth ? (
					<>
						<li>
							<Link to="/dashboard">Tableau de bord</Link>
						</li>
						<li>
							<button onClick={handleLogout}>Déconnexion</button>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to="/login">Connexion</Link>
						</li>
						<li>
							<Link to="/register">Inscription</Link>
						</li>
					</>
				)}
			</ul>
			{isAuth ? <p>Vous êtes connecté</p> : <p>Vous n'êtes pas connecté </p>}
		</nav>
	);
};

export default Navigation;
