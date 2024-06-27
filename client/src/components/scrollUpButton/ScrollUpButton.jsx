import "./ScrollUpButton.css";
import scrollUpImg from "../../assets/up-arrow.png";
import React, { useState, useEffect } from "react";

const ScrollUpButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show button when page is scrolled down
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	// Scroll the page to the top
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<button type="button" className="scroll" onClick={scrollToTop}>
			<img src={scrollUpImg} alt="" />
		</button>
	);
};

export default ScrollUpButton;
