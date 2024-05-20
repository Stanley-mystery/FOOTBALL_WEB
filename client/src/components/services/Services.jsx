import React from "react";
import "./Services.css";
import servicesData from "../../data/servicesData";
import rightArrow from "../../assets/rightArrow.png";

const Services = () => {
	return (
		<div className="Services">
			<span
				style={{
					color: "orange",
					fontSize: "20px",
					marginTop: "10px",
					textTransform: "uppercase",
				}}
			>
				EcoClean Services management services
			</span>

			<div className="services-wrapper">
				<h1>Our Cleaning services</h1>
				<span style={{ fontSize: "20px", color: "orange" }}>
					Make a choice today based on your preference
				</span>
				<div className="services-card">
					{servicesData?.map((service, i) => (
						<div className="service">
							<span>
								{" "}
								<img src={service.image} alt="" />
							</span>
							<div className="content-con">
								<span>{service.title}</span>
								<span>${service.amount}</span> <p>{service.content}</p>
								<span className="arrow-con">
									<img className="arrow" src={rightArrow} alt="" />
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
