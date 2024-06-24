import React from "react";
import "./AboutOrg.css";
import aboutImg from "../../assets/sponsorsImg.png";

const AboutOrg = () => {
	return (
		<div className="About-org">
			<div className="ao-container">
				<div className="ao-right">
					<img src={aboutImg} alt="" />
				</div>
				<div className="ao-left">
					<span>ABOUT THE ORGANIZER</span>
					<div className="ao-wrapper">
						<span className="sponsor-name">Ski Hi Entertainment.</span>
						<span className="ao-text">
							Ski-Hi Entertainment or simply Ski-Hi, is a Nigerian organization
							set up to provide family entertainment to a whole spectrum of
							audience.  Since 2007, we have organized over 130 events in and
							outside Nigeria with the drive to keep the family relaxing
							together.
						</span>
						<span className="ao-text">
							  Coal City Int’l Cup is our way of deploying the power of
							football in building and developing the socio-economic structure
							of our society through the universal language of footbal.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutOrg;
