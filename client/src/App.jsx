import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import GetInTouch from "./pages/getInTouch/GetInTouch";
import PhotoLab from "./pages/PhotoLab";

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
