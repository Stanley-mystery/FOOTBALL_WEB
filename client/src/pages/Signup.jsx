import React from "react";
import SignupContent from "../components/signupContent/SignupContent";
import { motion } from "framer-motion";

const Signup = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<SignupContent />
		</motion.div>
	);
};

export default Signup;
