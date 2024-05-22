import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FaPhone } from "react-icons/fa";
const Header = () => {
	return (
		<div className="Header">
			<span className="logo">
				<img src={logo} alt="" />
			</span>
			<div className="nav">
				<span>home</span>
				<span>about us</span>
				<span>get in touch</span>
			</div>
			<span>
				<FaPhone />
			</span>
		</div>
	);
};

export default Header;
