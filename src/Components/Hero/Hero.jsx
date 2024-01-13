import "./hero.scss";
import { motion } from "framer-motion";
import resume from "/resume.pdf";
import { useEffect, useState } from "react";

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
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

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;
    setPosition({ x, y });
  };

  const styles = {
    '--x': `${position.x}px`,
    '--y': `${position.y}px`,
  };
  
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          whileInView="animate"
        >
          <motion.h2 variants={textVariants}>
            MOHAMMAD ASRAFUL ISLAM MASUM
          </motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a className="btn" href={resume} download="Resume" variants={textVariants} onMouseMove={handleMouseMove} style={styles}>
              <span>Download Resume</span>
            </motion.a>
            <motion.a className="btn" href="#Contact" variants={textVariants} onMouseMove={handleMouseMove} style={styles}>
              <span>Contact Me</span>
            </motion.a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/port-folio-removebg-min.png" alt="" />
      </div>
      {/* <script>
      const btn = document.querySelector(".btn");
      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetLeft;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      };
    </script> */}
    </div>
  );
};

export default Hero;
