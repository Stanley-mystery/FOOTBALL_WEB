import React from "react";
import SigninContent from "../components/SigninContent/SigninContent";
import { motion } from "framer-motion";

const Signin = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<SigninContent />
		</motion.div>
	);
};

export default Signin;
