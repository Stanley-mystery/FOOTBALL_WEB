import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Offers from "./components/offers/Offers";
import Services from "./components/services/Services";
import Steps from "./components/steps/Steps";
import ContactUs from "./components/contactUs/ContactUs";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Offers />
			<Services />
			<Steps />
			<ContactUs />
			<Footer />
		</>
	);
};

export default App;
