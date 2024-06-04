import React from "react";
import "./Footer.css";
import { FaFacebook, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="Footer">
			<div className="up-f">
				<div className="address">
					<span className="f-title">address </span>
					<span>232/234 Herbert Macaulay Way,</span>
					<span>Alagomeji-Yaba,</span>
					<span> Lagos, Nigeria</span>
				</div>

				<div className="contacts">
					<span className="f-title">contacts </span>
					<span>Email: info@rccgjcg.org </span>
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
							<FaTiktok
								style={{ height: "30px", width: "30px", cursor: "pointer" }}
							/>
						</span>
						<span>
							<FaFacebook
								style={{ height: "30px", width: "30px", cursor: "pointer" }}
							/>
						</span>
						<span>
							<FaYoutube
								href=""
								style={{ height: "30px", width: "30px", cursor: "pointer" }}
							/>
						</span>
					</div>
				</div>
			</div>
			<div className="down-f">
				© Copyright 2024 RCCGJCG - All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
