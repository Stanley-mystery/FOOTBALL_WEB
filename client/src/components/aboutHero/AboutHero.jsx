import React from "react";
import "./AboutHero.css";
import Header from "../header/Header";

const AboutHero = () => {
	return (
		<div className="About-hero">
			<Header />
			<div className="about-hero-con">
				<span style={{ color: "orange" }}>About us</span>
			</div>
		</div>
	);
};

export default AboutHero;
