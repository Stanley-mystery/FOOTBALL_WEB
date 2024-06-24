import React from "react";
import "./AboutTour.css";
import aboutImg from "../../assets/aboutteamImg.png";

const AboutTour = () => {
	return (
		<div className="About-tour">
			<div className="at-container">
				<div className="at-left">
					<span>ABOUT THE TOURNAMENT</span>
					<div className="at-wrapper">
						<span className="at-text">
							The Coal City Cup is an annual international pre-season football
							tournament hosted at The Nnamdi Azikiwe Stadium in Enugu, Nigeria.
						</span>
						<span className="at-text">
							The first edition of the 11-day competition will hold from August
							1-11, 2024.{" "}
							<span className="span-text">
								Rangers International Football Club of Enugu
							</span>{" "}
							is a permanent feature as the host team.
						</span>
						<span className="at-text">
							The 2024 Competition will feature a total of 8 teams, with 4 teams
							from the Nigerian Professional Football League (NPFL) and 4 teams
							from outside the country. This diverse lineup promises a thrilling
							and competitive tournament.
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={aboutImg} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AboutTour;
