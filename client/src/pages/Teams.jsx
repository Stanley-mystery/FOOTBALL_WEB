import React from "react";
import TeamsHero from "../components/teamHero/TeamsHero";
import AboutTeams from "../components/aboutTheTeams/AboutTeams";
import ScrollUpButton from "../components/scrollUpButton/ScrollUpButton";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

const Teams = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<TeamsHero />
			<AboutTeams />
			<ScrollUpButton />
			<Footer />
		</motion.div>
	);
};

export default Teams;
