import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res, next) => {
	const { name, email, password } = req.body;
	const hashedPassword = await bcrypt.hashSync(password, 10);
	const newUser = new User({ name, email, password: hashedPassword });
	try {
		await newUser.save();
		console.log(newUser);
		res.status(201).json("user created successfully");
	} catch (error) {
		next(error);
	}
};
