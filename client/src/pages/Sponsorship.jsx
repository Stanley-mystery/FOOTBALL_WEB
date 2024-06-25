import React from "react";
import SponsorshipHero from "../components/sponsorshipHero/SponsorshipHero";
import SponsorshipPageContent from "../components/sponsorshipPageContent/SponsorshipPageContent";
import Footer from "../components/footer/Footer";
import { motion } from "framer-motion";

const Sponsorship = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<SponsorshipHero />
			<SponsorshipPageContent />
			<Footer />
		</motion.div>
	);
};

export default Sponsorship;
