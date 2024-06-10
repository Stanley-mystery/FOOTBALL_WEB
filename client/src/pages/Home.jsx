import React from "react";
import Hero from "../components/hero/Hero";
import Mission from "../components/mission/Mission";
import HomePageAbout from "../components/homepageAbout/HomePageAbout";

const Home = () => {
	return (
		<>
			<Hero />
			<Mission />
			<HomePageAbout />
		</>
	);
};

export default Home;
