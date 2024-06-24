import React from "react";
import "./TeamsHero.css";
import Header from "../../components/header/Header";

const TeamsHero = () => {
	return (
		<>
			<Header />
			<div className="Teams-hero">
				<div className="wrapper">
					<span>the teams</span>
					<span>8 Elite Football Teams</span>
				</div>
			</div>
		</>
	);
};

export default TeamsHero;
