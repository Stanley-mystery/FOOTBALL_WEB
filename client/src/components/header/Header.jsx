import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "../../assets/coalCityLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	return (
		<div className="Header">
			<div className="logoimg">
				<Link className="nav-link" to={"/"}>
					<img src={logo} alt="" />
				</Link>
			</div>
			<div className="nav">
				<span className="nav-menu">
					<Link className="nav-link " to={"/"}>
						home
					</Link>
				</span>
				<span className="nav-menu">
					{" "}
					<Link className="nav-link" to={"/about"}>
						about
					</Link>{" "}
				</span>

				<div
					className="dropdown"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className="dropdown-toggle">teams</span>
					{isOpen && (
						<div className="dropdown-menu">
							<span className="nav-menu-sub">
								<Link
									className="nav-link"
									to={"/teams"}
									style={{ color: "white" }}
								>
									info
								</Link>{" "}
							</span>

							<span className="nav-menu-sub">
								<Link
									className="nav-link"
									to={"/table"}
									style={{ color: "white" }}
								>
									table
								</Link>{" "}
							</span>
						</div>
					)}
				</div>

				<span className="nav-menu spon">
					<Link className="nav-link" to={"/sponsorship"}>
						sponsorship and partnership
					</Link>{" "}
				</span>

				<span className="nav-menu">
					{" "}
					<Link className="nav-link" to={"/signin"}>
						sign-in
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
