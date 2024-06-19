import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logo from "../../assets/coalCityLogo.png";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="up-f">
				<div className="address">
					<span>
						<img src={logo} alt="" className="logoimg" />
					</span>
				</div>

				<div className="contacts">
					<span className="f-title">contacts </span>
					<span>football </span>
					<span> Phone: 0000000000,</span>
					<span>0000000000</span>
				</div>

				<div className="social-links">
					<span className="f-title">social links</span>
					<div className="icons">
						<span>
							<FaInstagram
								style={{ height: "30px", width: "30px", cursor: "pointer" }}
							/>
						</span>

						<span>
							<FaFacebook
								style={{ height: "30px", width: "30px", cursor: "pointer" }}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="down-f">Copyright © 2024 | Powered by Coal City Cup</div>
		</div>
	);
};

export default Footer;
