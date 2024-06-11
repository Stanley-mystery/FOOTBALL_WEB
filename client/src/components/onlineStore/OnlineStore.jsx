import React from "react";
import "./OnlineStore.css";
import jerseyImg from "../../assets/jersey.png";

const OnlineStore = () => {
	return (
		<div className="OnlineStore">
			<span>online store</span>
			<div className="title">
				{" "}
				<span>shop for your </span>
				<span>branded accessories</span>
			</div>
			<div className="container">
				<div className="shopItems">
					<div className="item">
						<div className="item-img">
							<span className="saleDiv">sale</span>
							<img src={jerseyImg} alt="" />
						</div>
						<div className="item-desc">
							<span>t-shirt</span>
							<span>branded t-shirt</span>
							<span>N15000</span>
							<span>Buy Now</span>
						</div>
					</div>
				</div>

				<div className="shopItems">
					<div className="item">
						<div className="item-img">
							<span className="saleDiv">sale</span>
							<img src={jerseyImg} alt="" />
						</div>
						<div className="item-desc">
							<span>t-shirt</span>
							<span>branded t-shirt</span>
							<span>N15000</span>
							<span>Buy Now</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnlineStore;
