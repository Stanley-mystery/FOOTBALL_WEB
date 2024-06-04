import React from "react";
import Hero from "../components/hero/Hero";
import SocialLinks from "../components/socialLinks/SocialLinks";
import Offers from "../components/offers/Offers";
import Programs from "../components/programs/Programs";
import Footer from "../components/footer/Footer";

const Home = () => {
	return (
		<>
			<Hero />
			<SocialLinks />
			<Offers />
			<Programs />
			<Footer />
		</>
	);
};

export default Home;
