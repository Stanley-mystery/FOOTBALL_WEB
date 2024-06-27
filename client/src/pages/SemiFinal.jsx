import React from "react";
import SemifinalsContent from "../components/semifinalContent/SemifinalsContent";
import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";

const SemiFinal = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<SemifinalsContent />
			<Footer />
		</motion.div>
	);
};

export default SemiFinal;
