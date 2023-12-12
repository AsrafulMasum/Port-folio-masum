

const Skills = () => {

  const skills = ["HTML", "CSS", "JavaScript", "React", "Firebase", "Node.js", "Express.js", "MongoDB"]

  return (
    <div className="max-w-[1080px] mx-auto mt-10 md:mt-20">
      <h2 className="text-center text-7xl mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {
          skills.map((skill, idx) => <p key={idx} className="border border-gray-600 text-white px-12 py-4 inline-block rounded-sm hover:scale-110 hover:bg-orange-500 duration-1000">{skill}</p>)
        }
        
      </div>
    </div>
  );
};

export default Skills;