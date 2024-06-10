import React from "react";
import "./AboutUsContent.css";
import rccgImg from "../../assets/rccg.png";
import gspImg from "../../assets/rccgtgsp.png";
import jcgimg from "../../assets/members.png";

const AboutUsContent = () => {
	return (
		<div className="AboutUsContent">
			{/* rccg about content */}
			<div className="rccg-about">
				<span className="rccg-img">
					<img src={rccgImg} alt="" />
				</span>
				<span className="rccg-about-content">
					<span>rccg</span>
					<span>
						RCCG The Redeemed Christian Church of God is a pentecostal bible
						believing church that grew from nine members house fellowship centre
						in Lagos, Nigeria to become a global ministry with presence in over
						198 countries in the world. The church was founded by Pa Josiah
						Olufemi Akindayomi in 1952. After the appointment of Pastor E.A
						Adeboye as The General Overseer of the church, the mission began to
						grow exponentially. Today, God is still doing marvelous deeds
						through The Redeemed Christian Church of God, worldwide. One of the
						well-known programs of the church is the Holy Ghost Service, an all
						night miracle service that holds on the first Friday of every month
						at the Redemption Camp at Km. 46, Lagos-Ibadan expressway. The
						average headcount of those who attend the Service is about 500,000.
						The Holy Ghost Service now holds in different parts of the world
						which includes the United Kingdom, India, USA, Canada, South Africa,
						Australia, Dubai, Ghana, Philippines and many more.
					</span>
				</span>
			</div>

			{/* GSP about content */}
			<div className="gsp-about">
				<span className="gsp-about-content">
					<span>rccgtgsp</span>
					<span>
						The Good Shepherd's Pasture is a parish of The Redeemed Christian
						Church of God (RCCG). As part of RCCG, our goal is to make heaven
						and take as many people as possible with us. Our friends testify
						that we are a loving and vibrant multi cultural church. We are
						blessed with over 2,000 worshippers at our centre every Sunday.
						God's Special People, as we are fondly called invites you to worship
						with us and partake in the word in an atmosphere of God's presence.
					</span>
				</span>
				<span className="gsp-img">
					<img src={gspImg} alt="" />
				</span>
			</div>

			{/* jsc about content */}
			<div className="jcg-about">
				<span className="jcg-img">
					<img src={jcgimg} alt="" />
				</span>
				<span className="jcg-about-content">
					<span>rccgjcg</span>
					<span>
						The Good Shepherd's Pasture is a parish of The Redeemed Christian
						Church of God (RCCG). As part of RCCG, our goal is to make heaven
						and take as many people as possible with us. Our friends testify
						that we are a loving and vibrant multi cultural church. We are
						blessed with over 2,000 worshippers at our centre every Sunday.
						God's Special People, as we are fondly called invites you to worship
						with us and partake in the word in an atmosphere of God's presence.
					</span>
				</span>
			</div>
		</div>
	);
};

export default AboutUsContent;
