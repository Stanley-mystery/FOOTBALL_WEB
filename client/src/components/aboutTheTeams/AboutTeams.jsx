import React from "react";
import "./AboutTeams.css";
import fansImg from "../../assets/fansImg,png.jpg";
import rangersImg from "../../assets/team1.png";
import EnyimbaImg from "../../assets/team2.png";
import RemoImg from "../../assets/team3.png";
import KanopillarsImg from "../../assets/team4.png";
import FCKallonImg from "../../assets/team5.png";
import EsporteClubeVitóriaImg from "../../assets/team6.png";
import GorMahiaFootballClubImg from "../../assets/team7.png";
import CotonFootballClub from "../../assets/team8.png";
import ran from "../../assets/conton.png";
import eyim from "../../assets/Eyim.png";
import kan from "../../assets/kano.png";
import rem from "../../assets/remo.png";
import kall from "../../assets/koll.png";
import coton from "../../assets/conton.png";
import gor from "../../assets/gor.png";
import espor from "../../assets/cori.png";

const AboutTeams = () => {
	return (
		<div className="About-teams">
			{/* ABOUT TEAMS */}
			<div className="at-container">
				<div className="at-left">
					<span>ABOUT THE TEAMS</span>
					<div className="b-bottom">
						<span></span>
						<span></span>
					</div>
					<div className="at-wrapper">
						<span className="at-text-line">
							Prepare for a Football Extravaganza!
						</span>
						<span className="at-text">
							Ski-Hi Entertainment or simply Ski-Hi, is a Nigerian organization
							set up to provide family entertainment to a whole spectrum of
							audience.  Since 2007, we have organized over 130 events in and
							outside Nigeria with the drive to keep the family relaxing
							together.
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={fansImg} alt="" />
				</div>
			</div>

			{/* TEAMS */}

			<span className="teams-t">TEAMS</span>

			{/* first team */}
			<div className="t-container">
				<div className="at-right">
					<img src={rangersImg} alt="" />
				</div>
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={ran} alt="" />
							Rangers Football Club
						</span>
						<span className="t-text">
							Rangers International Football Club, commonly known as Enugu
							Rangers, is a Nigerian football team founded in 1970. Based in
							Enugu, the Rangers play their home games at the Nnamdi Azikiwe
							Stadium popularly called THE CATHEDRAL… Enugu Rangers FC is the
							only Nigerian club never to have been relegated from the Nigeria
							Premier League. Enugu Rangers are the Team Hosts of Coal City
							Int`l Cup 2024.
						</span>

						<span className="team-h">
							Enugu Rangers are the Team Hosts of Coal City Int`l Cup 2024.
						</span>
					</div>
				</div>
			</div>

			{/* second team */}
			<div className="t-container">
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={eyim} alt="" />
							Enyimba Football Club
						</span>
						<span className="t-text">
							Enyimba FC is a Nigerian football club based in the city of Aba,
							Abia State which plays in the NPFL. Their name means People`s
							Elephant in Igbo language. Founded in 1976, the club rose to
							prominence in the 2000s and is considered the most successful
							Nigerian football club as they won two African Champions League
							titles, nine Nigerian championships and four Federation Cups since
							2001. Their most-recent league glory came in the 2022-23 season. 
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={EnyimbaImg} alt="" />
				</div>
			</div>

			{/* third team */}
			<div className="t-container">
				<div className="at-right">
					<img src={RemoImg} alt="" />
				</div>
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={rem} alt="" />
							Remo Stars Football Club
						</span>
						<span className="t-text">
							Remo Stars Football Club is a professional football club based in
							Ikenne, Ogun State, Nigeria. The club competes in the Nigeria
							Professional Football League, the top division of the Nigeria
							Football League system. They are nicknamed the Sky Blue Stars.
							Rated one of the richest clubs in Nigeria, Remo has a reputation
							of having strong feeder team programs that support it`s football
							developmental structure. Remo Stars FC will be playing at the Coal
							City Int`l Cup 2024.
						</span>
					</div>
				</div>
			</div>

			{/* fourth team */}
			<div className="t-container">
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={kan} alt="" />
							Kano Pillars Football Club
						</span>
						<span className="t-text">
							Kano Pillars Football Club is a Nigerian football club based in
							Kano, Northern part of Nigeria. They play in the first tier
							division in Nigerian football, the Nigeria Professional Football
							League. Their home stadium is Sani Abacha Stadium. Kano Pillars FC
							was founded in 1990, the year the professional association
							football league started in Nigeria. Kano Pillars FC will be
							playing at the Coal City Int`l Cup 2024.
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={KanopillarsImg} alt="" />
				</div>
			</div>

			{/* fifth team */}
			<div className="t-container">
				<div className="at-right">
					<img src={FCKallonImg} alt="" />
				</div>
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={kall} alt="" />
							FC Kallon
						</span>
						<span className="t-text">
							Football Club Kallon, commonly known as F.C. Kallon, is a football
							club based in Freetown, Sierra Leone. Founded as Sierra Fisheries,
							the club is one of the top clubs in the Sierra Leone National
							Premier League and play their home games at the National Stadium
							in Freetown. It is owned by Mohammed Kallon, a renowned football
							star with vast experience in Europe.  FC Kallon will be in Enugu
							this August for the Coal City Int`l Cup.
						</span>
					</div>
				</div>
			</div>

			{/* sixth team */}
			<div className="t-container">
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={espor} alt="" />
							Esporte Clube Vitória
						</span>
						<span className="t-text">
							Esporte Clube Vitória, often called Vitória, is a Brazilian
							professional football club founded in 1899. Based in Salvador,
							Bahia, they are known as the “Leão” (Lion) due to their mascot.
							Donning red and black stripes, Vitória competes in the top tier
							Campeonato Brasileiro Série A and the state league Campeonato
							Baiano. Their home stadium is the Estádio Manoel Barradas. Esporte
							Clube Vitória will play at the Coal City Int`l Cup 2024.
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={EsporteClubeVitóriaImg} alt="" />
				</div>
			</div>

			{/* seventh team */}
			<div className="t-container">
				<div className="at-right">
					<img src={GorMahiaFootballClubImg} alt="" />
				</div>
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={gor} alt="" />
							Gor Mahia Football Club
						</span>
						<span className="t-text">
							Gor Mahia Football Club, also known as K`Ogalo is a football club
							based in Nairobi, Kenya. They have won the Kenyan Premier League
							20 times, and have also won the FKF President`s Cup 11 times. It
							is the first and only team from Kenya to win an African
							continental title to date, having won the African Cup Winners``
							Cup in 1987 after previously reaching the final in 1979.  GOR
							Mahia Football Club will be in Enugu this August for the Coal City
							Int`l Cup.
						</span>
					</div>
				</div>
			</div>

			{/* eight team */}
			<div className="t-container">
				<div className="t-left">
					<div className="at-wrapper">
						<span className="at-text-line">
							<img src={coton} alt="" />
							Coton Football Club
						</span>
						<span className="t-text">
							Coton Football Club, is a Beninese football club based in Ouidah,
							that competes in the Benin Premier League. During the 2021-2022
							season, the club, which was competing in the second division, was
							invited to participate in the Benin national premier division for
							the first time, blending teams from both the premier and second
							divisions, much like the 2020=2021 season. The club finished the
							season in first place, clinching its maiden championship title.
							Coton Football Club will be in Enugu this August for the Coal City
							Int`l Cup.
						</span>
					</div>
				</div>
				<div className="at-right">
					<img src={CotonFootballClub} alt="" />
				</div>
			</div>
		</div>
	);
};

export default AboutTeams;
