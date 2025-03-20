import jwt from "jsonwebtoken";

const login = (req, res) => {
	const token = jwt.sign(
		{
			username: "Elise",
		},
		process.env.JWT_SECRET,
		{ expiresIn: "1h" }
	);

	res.send(token);
};

export default login;
