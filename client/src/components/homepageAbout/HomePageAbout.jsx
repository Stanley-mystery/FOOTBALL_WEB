import React from "react";
import "./HomePageAbout.css";
import { Link } from "react-router-dom";

const HomePageAbout = () => {
	return (
		<div className="HomePageAbout">
			<div className="h-about-content">
				<span>about the tournament</span>
				<span>
					The Coal City Cup is an annual international pre-season football
					tournament hosted at The Nnamdi Azikiwe Stadium in Enugu, Nigeria. The
					first edition of the 11-day competition will hold from August 1-11,
					2024. Rangers International Football Club of Enugu is a permanent
					feature as the host team. The 2024 competition will feature 4 teams
					from the NPFL and 4 teams from outside the country.
				</span>
				<span>
					{" "}
					<Link className="nav-link" to={"/about"}>
						read more{" "}
					</Link>
				</span>
			</div>
		</div>
	);
};

export default HomePageAbout;
