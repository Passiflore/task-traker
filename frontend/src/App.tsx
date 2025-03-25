import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/Notfound";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound />} />{" "}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
