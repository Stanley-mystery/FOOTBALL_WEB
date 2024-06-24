import React from "react";
import "./AboutHero.css";
import Header from "../header/Header";

const AboutHero = () => {
	return (
		<>
			<Header />
			<div className="About-hero">
				<div className="a-hero-content">
					<span>ABOUT THE TOURNAMENT</span>
					<span>COAL CITY CUP INTERNATIONAL</span>
				</div>
			</div>
			{/* <div className="white-spacing"></div> */}
		</>
	);
};

export default AboutHero;
