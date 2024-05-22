import React from "react";
import "./SocialLink.css";
import instagramImg from "../../assets/skill-icons_instagram.png";
import facebookImg from "../../assets/logos_facebook.png";
import tiktokImg from "../../assets/3d-realistic-isolated-isometric-tiktok-icon.jpg";
import youtubeImg from "../../assets/logos_youtube-icon.png";

const SocialLinks = () => {
	return (
		<div className="SocialLinks">
			<span className="icon-con">
				<img src={instagramImg} alt="" />
				<span>Instagram</span>
			</span>

			<span className="icon-con">
				<img src={tiktokImg} alt="" />
				<span>Tiktok</span>
			</span>

			<span className="icon-con">
				<img src={facebookImg} alt="" />
				<span>facebook</span>
			</span>

			<span className="icon-con">
				<img src={youtubeImg} alt="" />
				<span>Youtube</span>
			</span>
		</div>
	);
};

export default SocialLinks;

// #6592e6;
