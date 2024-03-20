import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase  } from "react-icons/io5";
import { SiExpress, SiMongodb, SiNextdotjs, SiMongoose, SiAxios, SiJsonwebtokens, SiFramer} from "react-icons/si";
import { GrStripe } from "react-icons/gr";

const textVariants = {
  initial: {
    x: -100,
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
      icon: <IoLogoJavascript className="text-xl" />
    },
    {
      skill: "React",
      icon: <FaReact className="text-xl" />
    },
    {
      skill: "Firebase",
      icon: <IoLogoFirebase className="text-xl" />
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-xl" />
    },
    {
      skill: "Express.js",
      icon: <SiExpress className="text-xl" />
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-xl" />
    },
    {
      skill: "Next.js",
      icon: <SiNextdotjs className="text-xl" />
    },
    {
      skill: "Mongoose",
      icon: <SiMongoose className="text-xl" />
    },
    {
      skill: "Axios",
      icon: <SiAxios className="text-xl" />
    },
    {
      skill: "JWT",
      icon: <SiJsonwebtokens className="text-xl" />
    },
    {
      skill: "Stripe.js",
      icon: <GrStripe className="text-xl" />
    },
    {
      skill: "Framer Motion",
      icon: <SiFramer className="text-xl" />
    },
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
        className="flex flex-col md:flex-row md:flex-wrap justify-center gap-12"
      >
        {skills.map((skill, idx) => (
          <motion.p
            key={idx}
            variants={textVariants}
            className="border border-gray-600 text-white px-12 py-4 rounded-sm hover:bg-[#D3D3D3] hover:text-black group flex items-center justify-center gap-4"
          >
            <span>{skill?.icon}</span>
            <p className="group-hover:scale-110 duration-1000">{skill?.skill}</p>
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
