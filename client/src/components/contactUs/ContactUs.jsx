import React, { useState } from "react";
import "./ContactUs.css";
import image from "../../assets/person-taking-care-office-cleaning (2).jpg";
import Swal from "sweetalert2";

const contactUs = () => {
	// const [copySuccess, setCopySuccess] = useState("");
	const numberTocopy = "+234 484-9624";

	const handleCopy = () => {
		navigator.clipboard
			.writeText(numberTocopy)
			.then(() => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Copied ",
					showConfirmButton: false,
					timer: 1500,
				});
			})
			.catch((err) => {
				Swal.fire({
					position: "center",
					icon: "Failed",
					title: "Copy failed",
					showConfirmButton: false,
					timer: 1500,
				});
			});
	};
	return (
		<div className="ContactUs">
			<div className="left-c">
				<span>impressive & Clean Businesses with EcoClean Services </span>
				<span>
					Your office should reflect the professionalism and esteem of your
					company. EcoClean Services can deliver the impressive results your
					customers, clients, and employees expect when they walk into your
					business. Globally, we set the bar when it comes to janitorial
					Services that are ideal for office buildings, warehouses, plants and
					factories. Simply put: nothing is left out, and no dirt is kept in!
				</span>

				<div className="contacf-info">
					<span>call us today at: </span>
					<button className="num-btn" onClick={handleCopy}>
						+234 484-9624
					</button>
				</div>
			</div>
			<div className="right-c">
				<img src={image} alt="" />
			</div>
		</div>
	);
};

export default contactUs;
