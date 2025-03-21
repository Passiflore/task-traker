import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

export async function createUser(req, res) {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "Cet utilisateur existe déjà" });
		}

		const newUser = new User({ email, password });

		await newUser.save();

		res.status(201).json({
			message: "Utilisateur créé avec succès",
			user: { email: newUser.email, id: newUser._id },
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Erreur serveur lors de la création de l'utilisateur" });
	}
}

export async function login(req, res) {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(400).json({ message: "Utilisateur non trouvé" });
		}

		const match = await bcrypt.compare(password, existingUser.password);

		if (!match) {
			return res.status(401).json({ message: "Mot de passe invalide" });
		}

		const token = jwt.sign({ id: existingUser.email }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res.send(token);
	} catch {
		res.status(500).json({ message: "Erreur serveur lors du login" });
	}
}
