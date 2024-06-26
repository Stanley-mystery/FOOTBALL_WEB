import React from "react";
import { motion } from "framer-motion";
import FinalContent from "../components/finalsContent/FinalContent";

const Finals = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<FinalContent />
		</motion.div>
	);
};

export default Finals;
