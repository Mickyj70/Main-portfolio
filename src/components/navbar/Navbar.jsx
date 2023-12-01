import "./Navbar.css";
import { useState } from "react";
import { FaInstagram, FaGithub, FaWhatsapp, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
// import // AiFillTwitterCircle,
// "react-icons/ai";
import { motion } from "framer-motion";

// const variants = {
// 	open: {
// 		transition: {
// 			staggerChildren: 0.1,
// 		},
// 	},
// 	closed: {
// 		transition: {
// 			staggerChildren: 0.05,
// 			staggerDirection: -1,
// 		},
// 	},
// };
// const itemVariants = {
// 	open: {
// 		y: 0,
// 		opacity: 1,
// 	},
// 	closed: {
// 		y: 50,
// 		opacity: 0,
// 	},
// };

const Navbar = () => {
	const [click, setClick] = useState(true);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(true);

	return (
		<nav className="navbar" id="navbar">
			<div className="navbar-wrapper">
				<motion.div className="navbar-header">
					<motion.p
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						MIKE <span>DEV </span>
					</motion.p>
				</motion.div>
				<motion.ul
					className={click ? "navbar-list active" : "navbar-list"}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>
					<motion.li className="navbar-links">
						<motion.a href="/#" onClick={closeMobileMenu}>
							{" "}
							Home
						</motion.a>
					</motion.li>
					<motion.li className="navbar-links">
						<motion.a href="#about" onClick={closeMobileMenu}>
							About
						</motion.a>
					</motion.li>
					{/* <motion.li className="navbar-links">
						<motion.a href="#skills" onClick={closeMobileMenu}>
							Skills
						</motion.a>
					</motion.li> */}
					<motion.li className="navbar-links">
						<motion.a href="#portfolio" onClick={closeMobileMenu}>
							Portfolio
						</motion.a>
					</motion.li>
					<motion.li className="navbar-links">
						<motion.a href="#contact" onClick={closeMobileMenu}>
							Contact
						</motion.a>
					</motion.li>
				</motion.ul>
				<div className="navbar-icons">
					<p>
						<a href="https://github.com/Mickyj70">
							<FaGithub />
						</a>
					</p>
					<p>
						<a href="http://instagram.com/mike_dev7?igshid=NGVhN2U2NjQ0Yg==">
							<FaInstagram />
						</a>
					</p>
					<p>
						<a href="https://wa.link/hzr6ow">
							<FaWhatsapp />
						</a>
					</p>
				</div>
				<div className="hamburger-menu" onClick={handleClick}>
					<i>{!click ? <FaTimes /> : <HiOutlineMenuAlt1 />}</i>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
