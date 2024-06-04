import React from "react";
import image from "../../assets/worship.png";
import "./Programs.css";

const Programs = () => {
	return (
		<div className="Programs">
			<span>Our Programs</span>
			<div className="wrapper">
				<div className="container">
					<div className="card">
						<div className="face face1">
							<div className="content">
								{" "}
								<span className="letter">j</span>
								<span className="view">view</span>
							</div>
						</div>
						<div className="face face2">
							<div className="content">
								<h3>
									<a className="links" href="">
										services
									</a>
								</h3>
								<p className="dis">Know more about our activities!</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="face face1">
							<div className="content">
								<span className="letter">c</span>
								<span className="view">view</span>
							</div>
						</div>
						<div className="face face2">
							<div className="content">
								<h3>
									<a className="links" href="">
										Events/Announcement
									</a>
								</h3>
								<p className="dis">Know more about our activities!</p>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="card">
						<div className="face face1">
							<div className="content">
								<span className="letter">g</span>
								<span className="view">view</span>
							</div>
						</div>
						<div className="face face2">
							<div className="content">
								<h3>
									<a className="links" href="">
										online Services
									</a>
								</h3>
								<p className="dis">Know more about our activities!</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Programs;
