import React from "react";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import HomePageAbout from "../components/homepageAbout/HomePageAbout";
import FeaturedTeams from "../components/featuredTeam/FeaturedTeams";
import OnlineStore from "../components/onlineStore/OnlineStore";

const Home = () => {
	return (
		<>
			<Hero />
			<Mission />
			<HomePageAbout />
			<FeaturedTeams />
			<OnlineStore />
		</>
	);
};

export default Home;
