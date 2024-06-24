import React from "react";
import AboutHero from "../components/aboutHero/AboutHero";
import AboutTour from "../components/aboutTheTournament/AboutTour";
import AboutOrg from "../components/aboutTheOrganizer/AboutOrg";
import Interest from "../components/interest/Interest";
import Footer from "../components/footer/Footer";

const About = () => {
	return (
		<>
			<AboutHero />
			<AboutTour />
			<AboutOrg />
			<Interest />
			<Footer />
		</>
	);
};

export default About;
