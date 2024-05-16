import React from "react";
import "./Hero.css";

const Hero = () => {
	return (
		<div className="Hero">
			<div className="blur"></div>
			<div className="hero-content">
				<span className="hero-content-text">
					{" "}
					expert home cleaners for simple spotless cleaning
				</span>
				<span>Book your cleaning appointment with us today! </span>

				<button className="hero-btn">book a service</button>
			</div>
		</div>
	);
};

export default Hero;
