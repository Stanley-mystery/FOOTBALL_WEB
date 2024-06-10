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
				<a
					className="lnk"
					href="https://www.instagram.com/jcgteens?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
					target="_blank"
				>
					<img src={instagramImg} alt="" />
					<span>Instagram</span>
				</a>
			</span>

			<span className="icon-con">
				<a className="lnk" href="">
					<img src={tiktokImg} alt="" />

					<span>Tiktok</span>
				</a>
			</span>

			<span className="icon-con">
				<a className="lnk" href="">
					<img src={facebookImg} alt="" />
					<span>facebook</span>
				</a>
			</span>

			<span className="icon-con">
				<a className="lnk" href="">
					<img src={youtubeImg} alt="" />
					<span>Youtube</span>
				</a>
			</span>
		</div>
	);
};

export default SocialLinks;
