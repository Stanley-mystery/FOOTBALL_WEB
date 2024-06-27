import React from "react";
import AboutHero from "../components/aboutHero/AboutHero";
import AboutTour from "../components/aboutTheTournament/AboutTour";
import AboutOrg from "../components/aboutTheOrganizer/AboutOrg";
import Interest from "../components/interest/Interest";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import ScrollUpButton from "../components/scrollUpButton/ScrollUpButton";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<AboutHero />
			<AboutTour />
			<AboutOrg />
			<Interest />
			<ScrollUpButton />
			<Footer />
		</motion.div>
	);
};

export default About;
