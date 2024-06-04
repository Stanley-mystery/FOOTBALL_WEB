import React from "react";
import "./Offers.css";
import supervisionImg from "../../assets/collab.png";
import worphipImg from "../../assets/worship.png";
import membersImg from "../../assets/members.png";

const Offers = () => {
	return (
		<div className="Offers">
			<span> jesus chosen generation</span>
			<span>Welcome to RCCG Jesus Chosen Generation official website.</span>
			<span>
				As a church, we offer a welcoming community, spiritual guidance, worship
				services, and opportunities for growth.
			</span>
			<div className="main-con">
				<div className="offers-details">
					<div className="offers-text">
						<span className="num">01</span>
						<span>
							<p>share the gospel</p>
							<span className="details">
								You are welcome to the official site of RCCG, The Good
								Shepherd's Pasture. Our testimony of God's goodness from the
								inception of the parish is why we affirm that "We Are God's
								Special People". Welcome once again even as you navigate through
								our site. Remain Blessed! Amen.
							</span>
						</span>
					</div>
					<span className="img-con">
						<img className="offers-img" src={worphipImg} alt="" />
					</span>
				</div>

				<div className="offers-details">
					<span className="img-con">
						<img className="offers-img" src={supervisionImg} alt="" />
					</span>
					<div className="offers-text">
						<span className="num">02</span>
						<span>
							<p>share the gospel</p>
							<span className="details">
								You are welcome to the official site of RCCG, The Good
								Shepherd's Pasture. Our testimony of God's goodness from the
								inception of the parish is why we affirm that "We Are God's
								Special People". Welcome once again even as you navigate through
								our site. Remain Blessed! Amen.
							</span>
						</span>
					</div>
				</div>

				<div className="offers-details">
					<div className="offers-text">
						<span className="num">03</span>
						<span>
							<p>share the gospel</p>
							<span className="details">
								You are welcome to the official site of RCCG, The Good
								Shepherd's Pasture. Our testimony of God's goodness from the
								inception of the parish is why we affirm that "We Are God's
								Special People". Welcome once again even as you navigate through
								our site. Remain Blessed! Amen.
							</span>
						</span>
					</div>
					<span className="img-con">
						<img className="offers-img" src={supervisionImg} alt="" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default Offers;
