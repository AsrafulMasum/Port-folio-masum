import "./about.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const About = () => {
  return (
    <div className="about max-w-[1080px] h-full mx-auto flex justify-center items-center">
      <div className="img-container flex-1">
        <img src="/1.png" alt="" />
      </div>
      <motion.div variants={textVariants}
          initial="initial"
          whileInView="animate" className="info-container flex flex-col gap-10 flex-1">
        <motion.h2 variants={textVariants} className="text-8xl">About</motion.h2>
        <motion.h4 variants={textVariants} className="text-xl">
          I&#39;m a passionate web developer experienced in crafting dynamic
          applications using the MERN stack (MongoDB, Express.js, React,
          Node.js). With a keen eye for detail, I specialize in creating
          user-friendly interfaces. My commitment to delivering high-quality
          code is complemented by a constant pursuit of the latest industry
          trends. Excited to contribute my skills and innovation to your
          projects.
        </motion.h4>
      </motion.div>
    </div>
  );
};

export default About;
