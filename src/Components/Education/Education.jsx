import { motion } from "framer-motion";

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

const eduVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.4,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 15,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Education = () => {
  return (
    <div className="max-w-[1080px] mx-auto mt-16 flex flex-col lg:flex-row gap-10">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="flex-1 flex flex-col gap-10 p-4"
      >
        <motion.h2 variants={textVariants} className="text-7xl">
          About
        </motion.h2>
        <motion.h4 variants={textVariants} className="text-xl">
          I&#39;m a passionate web developer experienced in crafting dynamic
          applications using the MERN stack (MongoDB, Express.js, React,
          Node.js). With a keen eye for detail, I specialize in creating
          user-friendly interfaces. My commitment to delivering high-quality
          code is complemented by a constant pursuit of the latest industry
          trends. Excited to contribute my skills and innovation to your
          projects.
        </motion.h4>
        <motion.a
          className="p-5 border border-white rounded-[10px] text-white font-light text-center"
          href="#Contact"
          variants={textVariants}
        >
          Contact Me
        </motion.a>
      </motion.div>
      <motion.div initial="initial"
        whileInView="animate" variants={eduVariants} className="flex-1">
        <motion.h2 className="text-center text-7xl mb-4">Education</motion.h2>
        <motion.div className="space-y-4" variants={eduVariants}>
          <motion.div variants={eduVariants} className="flex flex-col gap-2 border border-white hover:bg-[#D3D3D3] hover:text-black px-8 py-4 rounded-sm text-white">
            <div className="hover:scale-105 duration-1000">
            <h2 className="font-bold">
              B.Sc in Computer Science & Engineering
            </h2>
            <h4 className="font-extralight">
              Daffodil International University
            </h4>
            <div className="flex gap-5">
              <p className="font-extralight">Year : 2017 - 2021</p>
              <p>| |</p>
              <p className="font-extralight">CGPA : 3.00</p>
            </div>
            <p>Location : Dhanmondi, Dhaka, Bangladesh</p>
            </div>
          </motion.div>

          <motion.div variants={eduVariants} className="flex flex-col gap-2 border border-white hover:bg-[#D3D3D3] hover:text-black px-8 py-4 rounded-sm text-white">
            <div className="hover:scale-105 duration-1000">
            <h2 className="font-bold">Higher Secondary</h2>
            <h4 className="font-extralight">Shaheed Police Smrity College</h4>
            <div className="flex gap-5">
              <p className="font-extralight">Year : 2014 - 2016</p>
              <p>| |</p>
              <p className="font-extralight">GPA : 4.75</p>
            </div>
            <p>Location : Mirpur-14, Dhaka, Bangladesh</p>
            </div>
          </motion.div>

          <motion.div variants={eduVariants} className="flex flex-col gap-2 border border-white hover:bg-[#D3D3D3] hover:text-black px-8 py-4 rounded-sm text-white">
            <div className="hover:scale-105 duration-1000">
            <h2 className="font-bold">Secondary</h2>
            <h4 className="font-extralight">Vashantek High School</h4>
            <div className="flex gap-5">
              <p className="font-extralight">Year : 2004 - 2014</p>
              <p>| |</p>
              <p className="font-extralight">GPA : 4.88</p>
            </div>
            <p>Location : Dhaka-Cant., Dhaka, Bangladesh</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
