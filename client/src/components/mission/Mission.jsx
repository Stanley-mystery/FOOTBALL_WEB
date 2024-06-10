import React from "react";
import "./Mission.css";
import logo from "../../assets/coalCityLogo.png";

const Mission = () => {
	return (
		<div className="Mission">
			<span className="m-logo">
				<img src={logo} alt="" />
			</span>
			<div className="mission-content">
				<div className="m-contanier">
					<span>1</span>
					<span>Goal</span>
					<span>
						Our mission is to unite football enthusiasts from around the globe,
						fostering sportsmanship and cultural exchange through the beautiful
						game.
					</span>
				</div>

				<div className="m-contanier">
					<span>11</span>
					<span>Days</span>
					<span>
						From August 1-11, 2024, the Nnamdi Azikiwe Stadium in Enugu will
						host an 11-day football extravaganza, filled with exciting matches
						and vibrant fanfare.
					</span>
				</div>

				<div className="m-contanier">
					<span>8</span>
					<span>Teams</span>
					<span>
						The Coal City Cup features a blend of 4 teams from the Nigerian
						Professional Football League (NPFL) and 4 international teams
					</span>
				</div>
			</div>
		</div>
	);
};

export default Mission;
