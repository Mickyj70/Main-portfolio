import "./home.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Home = () => {
	return (
		<div className="home" id="home">
			<div className="home-wrapper">
				<motion.div
					className="large-text"
					initial={{ y: 20 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<p>Hey, I&apos;m Michael </p>
					<span>FullStack Developer</span>
				</motion.div>
				<motion.div
					className="home-middle"
					initial={{ y: 70 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<button className="home-button">
						<a href="#">
							<FaGithub /> Github
						</a>
					</button>
					<button className="home-button">
						<a href="#">
							<FaLinkedinIn /> LinkedIn
						</a>
					</button>
					<button className="home-button">
						<a href="#">
							<HiOutlineMail /> Email
						</a>
					</button>
				</motion.div>
				<div className="small-text">
					<motion.p
						initial={{ y: 70, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.4 }}
					>
						Hi, I&apos;m Michael an Experienced full-stack developer with over 2
						years of experience in React, Next, Node js, and express js. Ready
						to create innovative web solutions.
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default Home;
