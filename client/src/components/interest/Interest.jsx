import React from "react";
import "./Interest.css";

const Interest = () => {
	return (
		<div className="Interest">
			<span>what is your interest?</span>
			<span>
				To receive information about CCC 2024, please enter the data below,
				click on “Send”, and then check your mailbox. You will receive the
				latest news and information regarding CCC 2024.
			</span>
			<div className="form-container">
				<form action="" id="main-form" className="main-form">
					<div className="form-group">
						<label htmlFor="">Name</label>
						<input type="text" name="name" id="name" className="name" />
					</div>
					<div className="form-group">
						<label htmlFor="">Email</label>
						<input type="text" name="email" id="email" className="email" />
					</div>
					<div className="form-group-textarea">
						<label htmlFor="">Message</label>
						<textarea
							name="message"
							id="massage"
							className="message"
						></textarea>
					</div>

					<button type="submit" className="form-btn">
						Send Message
					</button>
				</form>
			</div>
			<div className="white-spacing"></div>
		</div>
	);
};

export default Interest;
