import React from "react";
import "./GroupStageContent.css";
import Header from "../header/Header";
import GroupStageData from "../../data/GroupStageData";

const GroupStageContent = () => {
	return (
		<>
			<Header />
			<div className="GroupStageContent">
				{GroupStageData?.map((groupStage, index) => (
					<div className="gs-container" key={index}>
						<span className="gs-stage">{groupStage.stage}</span>
						<div className="gs-wrapper">
							<div className="gs-teams">
								<div className="gs-c">
									<div>
										<span>{groupStage.team1} </span>
										<span> vs </span>
										<span> {groupStage.team2} </span>
									</div>

									<div>
										<span>{groupStage.date} </span>

										<span>{groupStage.time} </span>
									</div>
								</div>
								<span className="gs-tick">Go To Ticket</span>
							</div>

							<div className="gs-teams">
								<div className="gs-c">
									<div>
										<span>{groupStage.team3} </span>
										<span> vs </span>
										<span>{groupStage.team4} </span>
									</div>

									<div>
										<span>{groupStage.date} </span>
										<span>{groupStage.time} </span>
									</div>
								</div>
								<span className="gs-tick">Go To Ticket</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default GroupStageContent;
