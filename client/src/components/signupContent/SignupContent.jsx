import React from "react";
import "./SignupContent.css";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const SignupContent = () => {
	return (
		<>
			<Header />
			<div className="signup" id="signup">
				<h1>Sign Up</h1>
				<div className="signup-form-container">
					<form>
						<input id="name" type="text" placeholder="name" />
						<input id="email" type="text" placeholder="email" />
						<input id="password" type="text" placeholder="password" />

						<button className="signup-form-btn">submit</button>
					</form>
					<div className="signin-link">
						<p>have an account?</p>
						<Link to="/signin">sigin</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignupContent;
