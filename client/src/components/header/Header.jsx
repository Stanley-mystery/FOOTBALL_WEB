import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	const numberTocopy = "09023242526";

	const handleCopy = () => {
		navigator.clipboard
			.writeText(numberTocopy)
			.then(() => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Whatapp Group Number Copied ",
					showConfirmButton: false,
					timer: 1800,
				});
			})
			.catch((err) => {
				Swal.fire({
					position: "center",
					icon: "Failed",
					title: "Copy failed",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};

	return (
		<div className="Header">
			<Link className="logo" to={"/"}>
				<img src={logo} alt="" />
			</Link>
			<div className="nav">
				<Link className="link" to={"/"}>
					<span>home</span>
				</Link>
				{/* drop down */}
				<div
					className="dropdown"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<span className="dropdown-toggle">who we are</span>
					{isOpen && (
						<div className="dropdown-menu">
							<Link className="link" to={"/aboutUs"}>
								{" "}
								<span className="dropdown-item">about us</span>
							</Link>
							<Link className="link" to={"/photoLab"}>
								<span className="dropdown-item">photo lab</span>
							</Link>
						</div>
					)}
				</div>

				<Link className="link" to={"/getInTouch"}>
					<span>get in touch</span>
				</Link>
			</div>
			<span>
				<FaWhatsapp className="whatsapp-link" onClick={handleCopy} />
			</span>
		</div>
	);
};

export default Header;
