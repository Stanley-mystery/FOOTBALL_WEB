import React from "react";
import "./SponsorshipPageContent.css";
import SponsorshipData from "../../data/SponsorshipData";

const SponsorshipPageContent = () => {
	console.log(SponsorshipData);
	return (
		<div className="SponsorshipPageContent">
			<span>
				The Coal City Int`l Cup presents massive Sponsorship and Partnership
				opportunities to every interested party.
			</span>
			<div className="spon-wrapper">
				<span>Available Sponsorship Opportunities</span>
				<div className="b-bottom">
					<span></span>
					<span></span>
				</div>
				<div className="spon-main-content">
					{SponsorshipData?.map((sponsorship, index) => (
						<div className="sponsorshipDesc" key={index}>
							<span>{sponsorship.sponsorshipType}</span>
							<span>{sponsorship.sponsorshipDesc}</span>
						</div>
					))}
				</div>
				<div className="spon-contact">
					<span>Contact us for sponsorship details</span>
					<span>contact us</span>
				</div>
			</div>
		</div>
	);
};

export default SponsorshipPageContent;
