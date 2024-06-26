import React from "react";
import TicketsPage from "../components/tickesContents/TicketsPage";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

const Tickets = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<TicketsPage />
			<Footer />
		</motion.div>
	);
};

export default Tickets;
