import { motion } from "framer-motion";

const variants = {
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

const Experience = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="max-w-[1080px] mx-auto mt-10 md:mt-20"
    >
      <motion.h2 className="text-7xl mb-10">Experience</motion.h2>
      <motion.h4 className="border-b inline-block">
        MERN Stack Developer | | 6 Months
      </motion.h4>
      <motion.p className="my-10">
        I possess comprehensive proficiency in web development using MongoDB,
        Express.js, React.js, and Node.js. With expertise in both front-end and
        back-end technologies & excel in building dynamic and responsive web
        applications. My experience involves leveraging MongoDB for efficient
        data storage, Express.js to create robust server-side applications,
        React.js for building interactive user interfaces, and Node.js to handle
        server-side logic and connections. My responsibilities often encompass
        designing, developing, testing, and deploying full-stack applications
        while ensuring seamless integration between various components of the
        MERN stack, thus contributing to the creation of modern, scalable, and
        feature-rich web solutions.
      </motion.p>
    </motion.div>
  );
};

export default Experience;
