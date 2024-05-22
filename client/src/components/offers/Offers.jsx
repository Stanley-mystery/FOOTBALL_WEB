import React from "react";
import "./Offers.css";
import supervisionImg from "../../assets/collab.png";
import worphipImg from "../../assets/worship.png";
import membersImg from "../../assets/members.png";

const Offers = () => {
	return (
		<div className="Offers">
			<span> jesus chosen generation</span>
			<span>
				As a church, we offer a welcoming community, spiritual guidance, worship
				services, and opportunities for growth.
			</span>

			<span className="img-con">
				<img src={membersImg} alt="" />
				<span>worships</span>
			</span>

			<span className="img-con">
				<img src={worphipImg} alt="" />
				<span>prayers</span>
			</span>

			<span className="img-con">
				<img src={supervisionImg} alt="" />
				<span>teachings</span>
			</span>
		</div>
	);
};

export default Offers;
