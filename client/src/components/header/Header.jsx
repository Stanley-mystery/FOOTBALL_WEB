import React from "react";
import "./Header.css";
import logo from "../../assets/coalCityLogo.png";

const Header = () => {
	return (
		<div className="Header">
			<img src={logo} alt="" className="logoimg" />

			<div className="nav">
				<span className="nav-menu">home</span>
				<span className="nav-menu">about </span>
				<span className="nav-menu">teams </span>
				<span className="nav-menu">contact us </span>
				<span className="nav-menu spon">sponsorship and partnership </span>
				{/* drop down */}
			</div>

			<span className="shop">shop</span>
		</div>
	);
};

export default Header;
