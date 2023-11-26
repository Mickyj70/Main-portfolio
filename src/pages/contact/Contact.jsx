import "./Contact.css";
// import { motion } from "framer-motion";

export const Contact = () => {
	return (
		<>
			<section id="contact" className="contactSection">
				<div className="contactContainer">
					<div className="contactHeader">
						<p>CONTACT</p>
					</div>

					<div className="contactInfo">
						<p>
							Ready to bring your vision to life or just want to chat? Reach
							out, and {"let's"} create something memorable together.
						</p>
						<p>
							{"I'm"} here to listen, collaborate, and craft web app solutions
							that resonate.
						</p>
					</div>

					<div className="contactMail">
						<a href="mailto:emrex1291@gmail.com">emrex1291@gmail.com</a>
					</div>

					<div className="contactFooter">
						<div className="contactName">
							<p>Mike Dev©</p>
						</div>

						<div className="contactLink">
							<a href="https://github.com/Mickyj70">GITHUB</a>
							<a href="https://x.com/IAmMicky7?t=jc1z6hLxPSZk5wnRwFxa5w&s=09">
								TWITTER
							</a>
							<a href="www.linkedin.com/in/excel-emma-457b61201">LINKEDIN</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
