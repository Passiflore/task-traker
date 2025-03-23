import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/Notfound";
// import Dashboard from "./pages/Dashboard"; // À décommenter quand Dashboard sera créé

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="/dashboard" element={<Dashboard />} /> */}
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound />} />{" "}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
