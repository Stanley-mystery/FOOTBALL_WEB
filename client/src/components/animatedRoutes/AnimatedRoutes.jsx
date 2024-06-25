import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Teams from "../../pages/Teams";
import Sponsorship from "../../pages/Sponsorship";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/sponsorship" element={<Sponsorship />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
