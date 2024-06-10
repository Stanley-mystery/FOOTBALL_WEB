import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/getInTouch" element={<GetInTouch />} />
				<Route path="/photoLab" element={<PhotoLab />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
