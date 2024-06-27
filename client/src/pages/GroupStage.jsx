import React from "react";
import GroupStageContent from "../components/groupStageContent/GroupStageContent";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

function GroupStage() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<GroupStageContent />
			<Footer />
		</motion.div>
	);
}

export default GroupStage;
