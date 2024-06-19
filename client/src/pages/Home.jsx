import React from "react";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import HomePageAbout from "../components/homepageAbout/HomePageAbout";
import FeaturedTeams from "../components/featuredTeam/FeaturedTeams";
import OnlineStore from "../components/onlineStore/OnlineStore";
import Interest from "../components/interest/Interest";
import Footer from "../components/footer/Footer";

const Home = () => {
	return (
		<>
			<Hero />
			<Mission />
			<HomePageAbout />
			<FeaturedTeams />
			<OnlineStore />
			<Interest />
			<Footer />
		</>
	);
};

export default Home;
