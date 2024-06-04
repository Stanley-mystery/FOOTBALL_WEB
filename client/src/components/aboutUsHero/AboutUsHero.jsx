import React from "react";

const AboutUsHero = () => {
	return (
		<div className="Hero">
			<Header />
			<div className="hero-con">
				<span>welcome to RCCG JESUS CHOSEN GENERATION...</span>

				<span>
					{text}{" "}
					<span style={{ color: "orange" }}>
						<Cursor cursorStyle="|" />
					</span>
				</span>
				<span className="hero-rm">learn more </span>
			</div>
		</div>
	);
};

export default AboutUsHero;
