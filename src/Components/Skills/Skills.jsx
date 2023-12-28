import { motion } from "framer-motion";

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

  const skills = ["HTML", "CSS", "JavaScript", "React", "Firebase", "Node.js", "Express.js", "MongoDB"]

  return (
    <motion.div variants={textVariants}
    initial="initial"
    whileInView="animate" className="max-w-[1080px] mx-auto mt-10 md:mt-20">
      <motion.h2 variants={textVariants} className="text-center text-7xl mb-10">Skills</motion.h2>
      <motion.div variants={textVariants} className="flex flex-wrap justify-center gap-12">
        {
          skills.map((skill, idx) => <motion.p key={idx} variants={textVariants} className="border border-gray-600 text-white px-12 py-4 inline-block rounded-sm"><p className="hover:scale-125 duration-1000">{skill}</p></motion.p>)
        }
        
      </motion.div>
    </motion.div>
  );
};

export default Skills;