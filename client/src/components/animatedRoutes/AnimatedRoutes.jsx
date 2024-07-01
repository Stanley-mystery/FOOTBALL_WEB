import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Teams from "../../pages/Teams";
import Sponsorship from "../../pages/Sponsorship";
import { AnimatePresence } from "framer-motion";
import Tickets from "../../pages/Tickets";
import GroupStage from "../../pages/GroupStage";
import SemiFinal from "../../pages/SemiFinal";
import Finals from "../../pages/Finals";
import Signup from "../../pages/Signup";
import Signin from "../../pages/Signin";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/sponsorship" element={<Sponsorship />} />
				<Route path="/tickets" element={<Tickets />} />
				<Route path="/groupStage" element={<GroupStage />} />
				<Route path="/semiFinal" element={<SemiFinal />} />
				<Route path="/final" element={<Finals />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/signin" element={<Signin />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
