import React from "react";
import "./Steps.css";
import { color, motion } from "framer-motion";

const Steps = () => {
	return (
		<div className="Steps">
			<span>Booking our services is easy</span>
			<div className="steps-con">
				<span className="steps-main">
					<span className="outer-circle">
						<span className="steps-num">01</span>
					</span>
					<span>Submit a few details.</span>
				</span>
				<span className="steps-main">
					<span className="outer-circle">
						<span className="steps-num">02</span>
					</span>
					<span>We will schedule a walk-through.</span>
				</span>

				<span className="steps-main">
					<span className="outer-circle">
						<span className="steps-num">03</span>
					</span>
					<span>We will be at your service.</span>
				</span>
			</div>
		</div>
	);
};

export default Steps;
