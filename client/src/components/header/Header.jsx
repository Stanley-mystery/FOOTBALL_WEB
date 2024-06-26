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

				<span className="nav-menu">
					<Link className="nav-link" to={"/contactUs"}>
						contact us
					</Link>{" "}
				</span>

				<span className="nav-menu spon">
					<Link className="nav-link" to={"/sponsorship"}>
						sponsorship and partnership
					</Link>{" "}
				</span>
			</div>
			<div className="header-btn">
				<Link className=" ticket" to={"/tickets"}>
					<span> tickets</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;

<Link className="logo" to={"/"}>
	<img src={logo} alt="" />
</Link>;
