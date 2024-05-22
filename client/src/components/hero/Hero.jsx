import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import Header from "../header/Header";

const Hero = () => {
	const [text] = useTypewriter({
		words: [
			"join us today at RCCG JESUS CHOSEN GENERATION!!!",
			`it's a wonderful opportunity to connect with others,find encouragement, and grow spiritually.`,
			`join us at church this sunday for an uplifting experience filled with inspiring messages and God's presence.`,
		],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 60,
	});
	return (
		<div className="Hero">
			<Header />
			<div className="hero-con">
				<span>welcome to RCCG JESUS CHOSEN GENERATION...</span>

				<span>
					{text}{" "}
					<span style={{ color: "orange" }}>
						<Cursor cursorStyle="|" />
					</span>
				</span>
				<span className="hero-rm">learn more </span>
			</div>
		</div>
	);
};

export default Hero;
