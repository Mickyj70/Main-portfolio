import "./about.css";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about-wrapper">
        <div className="about-header">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 20 },
            }}
          >
            About
          </motion.h2>
        </div>
        <div className="about-top">
          <motion.p
            transition={{ duration: 0.8, delay: 0.8 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Hello there! I&apos;m michael, a passionate full-stack developer
            with a love for turning ideas into reality through the power of
            code.I specialize in creating robust, scalable, and user-friendly
            web applications that leave a lasting impact.
          </motion.p>
          <motion.p
            transition={{ duration: 0.85, delay: 0.85 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            I thrive in the world of full-stack development, where I seamlessly
            transition between front-end and back-end technologies. From
            crafting pixel-perfect user interfaces with React to architecting
            scalable server-side solutions with Node.js, I&apos;m always excited
            to leverage the latest tools and frameworks to build cutting-edge
            applications.
          </motion.p>
          <motion.h3
            transition={{ duration: 0.9, delay: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Here are some technologies I&apos;m proficient in: <br />
            Front-End: HTML, CSS, JavaScript, React, Redux, Next.js <br />{" "}
            Back-End: Node.js, Express <br /> Databases: MongoDB, MySQL,
            PostgreSQL DevOps <br />
            Deployment: Docker, Kubernetes, AWS, Heroku
          </motion.h3>
        </div>
        <div className="about-bottom">
          <motion.button
            href="#contact"
            className="about-button"
            transition={{ duration: 0.95, delay: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <a href="#contact">contact me</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
