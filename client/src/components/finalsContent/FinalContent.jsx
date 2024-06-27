import React from "react";
import "./FinalContent.css";
import FinalsData from "../../data/FinalsData";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const FinalContent = () => {
	return (
		<>
			<Header />
			<div className="FinalContent">
				<Link
					to={"/tickets"}
					style={{
						textDecoration: "none",
					}}
				>
					<span className="go-back-btn">Go back</span>
				</Link>
				{FinalsData?.map((FinalsData, index) => (
					<div className="gs-container" key={index}>
						<span className="gs-stage">{FinalsData.stage}</span>
						<div className="gs-wrapper">
							<div className="gs-teams">
								<div className="gs-c">
									<div>
										<span>{FinalsData.team1} </span>
										<span> vs </span>
										<span> {FinalsData.team2} </span>
									</div>

									<div>
										<span>{FinalsData.date} </span>

										<span>{FinalsData.time} </span>
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

export default FinalContent;
