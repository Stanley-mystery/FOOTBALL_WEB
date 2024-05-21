import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
	return (
		<div className="Header">
			<span className="logo">
				<img src={logo} alt="" />
			</span>
			<div className="nav">
				<span>home</span>
				<span>about us</span>
				<span>contact</span>
			</div>
			<span>join live</span>
		</div>
	);
};

export default Header;
