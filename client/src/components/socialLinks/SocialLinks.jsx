import React from "react";
import "./SocialLink.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const SocialLinks = () => {
	return (
		<div className="SocialLinks">
			<span className="title">our social links </span>
			<div className="con">
				<span className="icon-con">
					<FaInstagram
						style={{ width: "10rem", height: "10rem", cursor: "pointer" }}
					/>{" "}
				</span>
				<span className="icon-con">
					<FaTiktok
						style={{ width: "10rem", height: "10rem", cursor: "pointer" }}
					/>
				</span>
			</div>
		</div>
	);
};

export default SocialLinks;
