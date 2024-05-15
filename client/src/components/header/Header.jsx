import React from "react";
import "./Header.css";

const Header = () => {
	return (
		<div className="Header">
			<h3 className="logo">
				<span>Eco</span>
				<span>Clean </span>
				<span>Services</span>
			</h3>
			<ul className="header-nav">
				<li>home</li>
				<li>cleaning Service</li>
				<li>floor Care</li>
				<li>Contact us</li>
			</ul>
		</div>
	);
};

export default Header;
