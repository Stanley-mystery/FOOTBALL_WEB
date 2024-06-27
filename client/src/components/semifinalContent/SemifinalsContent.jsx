import React from "react";
import "./SemifinalsContent.css";
import Header from "../header/Header";
import SemiFinalData from "../../data/SemiFinalsData";
import { Link } from "react-router-dom";

const SemifinalsContent = () => {
	return (
		<>
			<Header />
			<div className="SemiStageContent">
				{SemiFinalData?.map((SemiFinal, index) => (
					<div className="gs-container" key={index}>
						<Link
							to={"/tickets"}
							style={{
								textDecoration: "none",
							}}
						>
							<span className="go-back-btn">Go back</span>
						</Link>

						<span className="gs-stage">{SemiFinal.stage}</span>
						<div className="gs-wrapper">
							<div className="gs-teams">
								<div className="gs-c">
									<div>
										<span>{SemiFinal.team1} </span>
										<span> vs </span>
										<span> {SemiFinal.team2} </span>
									</div>

									<div>
										<span>{SemiFinal.date1} </span>

										<span>{SemiFinal.time} </span>
									</div>
								</div>
								<span className="gs-tick">Go To Ticket</span>
							</div>

							<div className="gs-teams">
								<div className="gs-c">
									<div>
										<span>{SemiFinal.team3} </span>
										<span> vs </span>
										<span>{SemiFinal.team4} </span>
									</div>

									<div>
										<span>{SemiFinal.date2} </span>
										<span>{SemiFinal.time} </span>
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

export default SemifinalsContent;
