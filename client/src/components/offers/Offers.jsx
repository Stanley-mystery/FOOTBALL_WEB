import React from "react";
import "./Offers.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bookOnline from "../../assets/Container-12.png";
import negotiateImage from "../../assets/Container-16.png";
import customerServiceImage from "../../assets/Container-8.png";
import cleaner from "../../assets/person-taking-care-office-cleaning (1).jpg";

const Offers = () => {
	const [text] = useTypewriter({
		words: [
			"countries around the World.",
			"Nigeria.",
			"UK.",
			"US.",
			"Italy.",
			"France.",
			"Spain.",
			"Dubai.",
			"Kenya.",
			"55 Countries in Africa.",
		],
		loop: {},
		typeSpeed: 120,
		deleteSpeed: 10,
	});

	return (
		<div className="Offers">
			<div className="left-o">
				<span>
					<img src={bookOnline} alt="" /> <p>Book online & Pay by Cash</p>
				</span>
				<span>
					<img src={negotiateImage} alt="" />{" "}
					<p>Negotiatable Price Guaranteed</p>
				</span>
				<span>
					<img src={customerServiceImage} alt="" />{" "}
					<p>Superior Customer Service</p>
				</span>
			</div>
			<div className="image-wrapper">
				<img className="offers-img" src={cleaner} alt="" />
				<div>
					<span>Simple Spotless Home Cleaing Services in </span>
					<span style={{ color: "black", fontStyle: "italic" }}>{text}</span>

					<span style={{ color: "black" }}>
						<Cursor cursorStyle="|" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Offers;
