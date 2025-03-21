import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connectée: ${conn.connection.host}`);
		return conn;
	} catch {
		console.log("Error connecting to the database");
		process.exit(1);
	}
};

export default connectDB;
