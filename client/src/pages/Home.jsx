import React from "react";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import HomePageAbout from "../components/homepageAbout/HomePageAbout";
import FeaturedTeams from "../components/featuredTeam/FeaturedTeams";
import OnlineStore from "../components/onlineStore/OnlineStore";
import Interest from "../components/interest/Interest";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";
import ScrollUpButton from "../components/scrollUpButton/ScrollUpButton";

const Home = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Hero />
			<Mission />
			<HomePageAbout />
			<FeaturedTeams />
			<OnlineStore />
			<Interest />
			<ScrollUpButton />
			<Footer />
		</motion.div>
	);
};

export default Home;
