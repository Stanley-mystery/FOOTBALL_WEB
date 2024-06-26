import React from "react";
import "./Hero.css";
import Header from "../header/Header";

const Hero = () => {
	return (
		<>
			<Header />

			<div className="Hero">
				<div className="hero-content">
					<span>WELCOME </span>
					<span>
						Experience the Thrill of Global Football at the{" "}
						<span> Coal City Cup! </span>{" "}
					</span>
				</div>
			</div>
		</>
	);
};

export default Hero;
