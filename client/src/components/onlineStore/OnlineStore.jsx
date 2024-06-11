import React from "react";
import "./OnlineStore.css";
import jerseyImg from "../../assets/jersey.png";

const OnlineStore = () => {
	return (
		<div className="OnlineStore">
			<span>online store</span>
			<span>shop for your branded accessories</span>
			<div className="shopItems">
				<div className="item">
					<div className="item-img">
						<img src={jerseyImg} alt="" />
					</div>
					<span>t-shirt</span>
					<span>branded t-shirt</span>
					<span>N15000</span>
					<span>Buy Now</span>
				</div>
			</div>
		</div>
	);
};

export default OnlineStore;
