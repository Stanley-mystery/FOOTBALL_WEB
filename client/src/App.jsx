import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

import Offers from "./components/offers/Offers";
import Services from "./components/services/Services";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Offers />
			<Services />
		</>
	);
};

export default App;
