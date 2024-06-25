import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/coalCityLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="Header">
			<div className="logoimg">
				<Link className="nav-link" to={"/"}>
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="nav">
				<span className="nav-menu">
					<Link className="nav-link" to={"/"}>
						home
					</Link>
				</span>
				<span className="nav-menu">
					{" "}
					<Link className="nav-link" to={"/about"}>
						about
					</Link>{" "}
				</span>
				<span className="nav-menu">
					<Link className="nav-link" to={"/teams"}>
						teams
					</Link>{" "}
				</span>
				<span className="nav-menu">contact us </span>
				<span className="nav-menu spon">
					<Link className="nav-link" to={"/sponsorship"}>
						sponsorship and partnership
					</Link>{" "}
				</span>
			</div>
			<div className="header-btn">
				<span className="store">store</span>
				<span className="tickets">tickets</span>
			</div>
		</div>
	);
};

export default Header;

<Link className="logo" to={"/"}>
	<img src={logo} alt="" />
</Link>;
