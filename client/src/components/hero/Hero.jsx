import React from "react";
import "./Hero.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
	const [text] = useTypewriter({
		words: [
			`Elevate your home's sparkle with ecoclean services`,
			"ultimate home cleaning Experience globally",
			"	expert home cleaners for simple spotless cleaning",
		],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 10,
	});

	return (
		<>
			<div className="Hero">
				<div className="hero-content">
					<h1
						style={{
							height: "200px",
						}}
					>
						<span>{text}</span>
						<span style={{ color: "orange" }}>
							<Cursor cursorStyle="|" />
						</span>
					</h1>

					<span>Book your cleaning appointment with us today! </span>

					<button className="hero-btn">book a service</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
