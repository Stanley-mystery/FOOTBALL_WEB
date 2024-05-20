import React, { useState } from "react";
import "./Footer.css";
import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";

const Footer = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		// You can add your form submission logic here
	};
	return (
		<div className="Footer">
			<div className="left-f">
				<div className="left-content">
					<span>Contact</span>
					<span>
						Thank you for your interest. We look forward to hearing from you
						soon.
					</span>
					<div className="icon-wrapper">
						<div className="contact-info">
							<span className="icons-con">
								<FaClock size={20} />
							</span>
							<span className="details">
								<span>Hours of Operation </span>
								<span>Mon-Fri: 9AM-5PM </span>
							</span>
						</div>
						<div className="contact-info">
							<span className="icons-con">
								<FaPhone size={20} />
							</span>
							<span className="details">
								<span>24/7 Emergency Service </span>
								<span>+234 4849624</span>
							</span>
						</div>
						<div className="contact-info">
							<span className="icons-con">
								<FaLocationArrow size={20} />
							</span>
							<span className="details">
								<span>Service Area </span>
								<span>Globally</span>
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="right-f">
				<span>Schedule an Appointment!</span>
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="display">
						<div className="form-group">
							<input
								type="text"
								id="firstName"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="First name"
								autoComplete="false"
								required
							/>
						</div>

						<div className="form-group">
							<input
								type="text"
								id="lastName"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Last name"
								autoComplete="false"
								required
							/>
						</div>
					</div>
					<div className="display">
						<div className="form-group">
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								required
							/>
						</div>
						<div className="form-group">
							<input
								type="tel"
								id="phone"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								placeholder="Phone number"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							placeholder="Write a message"
							required
						></textarea>
					</div>
					<button type="submit">Send</button>
				</form>
				<h3 className="logo">
					<span>Eco</span>
					<span>Clean </span>
					<span>Services</span>
				</h3>
			</div>
		</div>
	);
};

export default Footer;
