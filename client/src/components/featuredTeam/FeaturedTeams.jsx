import React from "react";
import "./FeaturedTeams.css";
import FeaturedTeamsDatas from "../../data/FeaturedTeamsData";

const FeaturedTeams = () => {
	return (
		<div className="FeaturedTeam">
			<span className="title">featured teams</span>
			<div className="flex">
				{FeaturedTeamsDatas?.map((teamData, index) => (
					<div
						key={index}
						class="flex-container"
						style={{
							backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
						url(${teamData.image})`,
							position: "relative",
							width: "291px",
							height: "450px",
							objectFit: "cover",
							backgroundPosition: "center",
							backgroundSize: "cover",
							cursor: "pointer",
						}}
					>
						<span className="team-name">{teamData.teamName}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default FeaturedTeams;
