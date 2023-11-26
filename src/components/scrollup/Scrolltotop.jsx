import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

// textVariant = {
//     initial : {
//         x: -500,
//         opacity : 0.
//     },
//     animate : {
//         x : 0,
//         opacity : 1,
//         transition : {
//             duration:  1,
//             staggerChildren: 0.1
//         }
//     },
//     scrollButton : {
//         opacity: 0,
//         y: 10,
//         transition: {
//     duration: 2,
//     repeat : Infinity
//         }
//     }
// }

export default function Scrolltotop() {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<motion.div
			className="topButton-body"
			animate={{
				y: 10,
				opacity: 0.5,
			}}
			transition={{
				duration: 2,
				repeat: Infinity,
			}}
		>
			{backToTopButton && (
				<motion.button
					style={{
						position: "fixed",
						bottom: "50px",
						right: "50px",
						fontSize: "50px",
						width: "50px",
						height: "50px",
					}}
					onClick={scrollUp}
				>
					^
				</motion.button>
			)}
		</motion.div>
	);
}
