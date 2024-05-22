import React from "react";
import "./App.css";

import Hero from "./components/hero/Hero";
import SocialLinks from "./components/socialLinks/SocialLinks";
import Offers from "./components/offers/Offers";

const App = () => {
	return (
		<>
			<Hero />
			<SocialLinks />
			<Offers />
		</>
	);
};

export default App;
