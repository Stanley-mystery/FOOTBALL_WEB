import React from "react";
import "./Services.css";
import servicesData from "../../data/servicesData";

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
			<h1>Offering Top Rated Home Cleaning Solutions Globally.</h1>
			<h3 style={{ color: "gray" }}>
				Experience the Ultimate Cleaning Solutions with EcoClean Services
				Globally.From apartments to villas, trust the most riliable name
				Globally in cleaning scene. Make your home simply spotless with EcoClean
				Services, your trusted partner for premium home cleaning requirements.
			</h3>
			<div className="services-wrapper">
				<h1>Our Cleaning services</h1>
				<span style={{ fontSize: "20px", color: "orange" }}>
					Make a choice today based on your preference
				</span>
				<div className="service-card"></div>
			</div>
		</div>
	);
};

export default Services;
