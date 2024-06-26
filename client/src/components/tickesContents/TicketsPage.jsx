import React from "react";
import "./TicketsPage.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const TicketsPage = () => {
	return (
		<>
			<Header />
			<div className="TicketsPage">
				<div>
					<div className="tickets-p-wrapper">
						<Link className="stages-link" to={"/groupStage"}>
							<div className="stages">
								<span>Group Stage</span>
								<span>1 - 6 Aug 2024</span>
								<span>view</span>
							</div>
						</Link>
						<span>Buy Tickets</span>
					</div>

					<div className="tickets-p-wrapper">
						<Link className="stages-link" to={"/semiFinal"}>
							<div className="stages">
								<span>Semi Final</span>
								<span>8 - 9 Aug 2024</span>
								<span>view</span>
							</div>
						</Link>
						<span>Buy Tickets</span>
					</div>

					<div className="tickets-p-wrapper">
						<Link className="stages-link" to={"/final"}>
							<div className="stages">
								<span>Final</span>
								<span>11 Aug 2024</span>
								<span>view</span>
							</div>
						</Link>
						<span>Buy Tickets</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default TicketsPage;
