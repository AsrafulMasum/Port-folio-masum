import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";

const textVariants = {
  initial: {
    x: 100,
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

const Skills = () => {
  const skills = [
    {
      skill: "HTML",
      icon: <FaHtml5 className="text-xl" />
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "JavaScript",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "React",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "Firebase",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "Node.js",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "Express.js",
      icon: <FaCss3Alt className="text-xl" />
    },
    {
      skill: "MongoDB",
      icon: <FaCss3Alt className="text-xl" />
    },
    // "HTML",
    // "CSS",
    // "JavaScript",
    // "React",
    // "Firebase",
    // "Node.js",
    // "Express.js",
    // "MongoDB",
    // "Next.js",
    // "Mongoose",
    // "Axios",
    // "JWT",
    // "Stripe.js"
  ];

  return (
    <motion.div
      variants={textVariants}
      initial="initial"
      whileInView="animate"
      className="max-w-[1080px] mx-auto mt-10 md:mt-20"
    >
      <motion.h2 variants={textVariants} className="text-center text-7xl mb-10">
        Skills
      </motion.h2>
      <motion.div
        variants={textVariants}
        className="flex flex-wrap justify-center gap-12"
      >
        {skills.map((skill, idx) => (
          <motion.p
            key={idx}
            variants={textVariants}
            className="border border-gray-600 text-white px-12 py-4 rounded-sm hover:bg-[#D3D3D3] hover:text-black group flex items-center gap-4"
          >
            <span>{skill?.icon}</span>
            <p className="group-hover:scale-125 duration-1000">{skill?.skill}</p>
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
