import React from "react";
import "./SigninContent.css";
import Header from "../header/Header";
import { Link } from "react-router-dom";

const SigninContent = () => {
	return (
		<>
			<Header />
			<div className="signin" id="signin">
				<h1>Sign in</h1>
				<div className="signin-form-container">
					<form>
						<input id="email" type="text" placeholder="email" />
						<input id="password" type="text" placeholder="password" />

						<button className="signin-form-btn">submit</button>
					</form>
					<div className="signup-link">
						<p>Dont have an account?</p>
						<Link to="/signup">signup</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default SigninContent;
