import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Flarum",
    img: "https://i.postimg.cc/yY8dky6x/flarum.png",
    desc: "Flarum is a forum discussions website . Where users engage in discussions, share information, and connect with others around various topics. It's a place to ask questions, share opinions, and interact with a community of like-minded individuals. Users can create threads, post messages, and reply to discussions.",
    demo: "https://forums-6b0ca.web.app",
    code: "https://github.com/AsrafulMasum/Flarum",
  },
  {
    id: 2,
    title: "E Guidance",
    img: "https://i.postimg.cc/c4kQHHWq/E-Guidance.png",
    desc: "E Guidance is a event management website with front-end only. It is a digital platform that simplifies the planning, promotion, and coordination of events. It offers tools for tasks like scheduling, ticketing, and attendee engagement, making event organization more efficient and successful for organizers and participants alike.",
    demo: "https://e-mania.web.app",
    code: "https://github.com/AsrafulMasum/E-Guidance",
  },
  {
    id: 3,
    title: "eduCare",
    img: "https://i.postimg.cc/QdWWdJS5/eduCare.png",
    desc: "eduCare is a education based website with assignments task . It is an online platform designed for students to manage coursework. It allows students to submit assignments digitally, provides tools for creating assignments, and facilitates grading and feedback. This platform streamlines the entire assignment process, making it easier for students.",
    demo: "https://educare-fe496.web.app",
    code: "https://github.com/AsrafulMasum/edu-Care",
  },
  {
    id: 4,
    title: "carMart",
    img: "https://i.postimg.cc/9f6R9R8S/carMart.png",
    desc: "carMart is an e-commerce site which is an online platform dedicated to buying and selling vehicles. It serves as a marketplace where users can browse a wide range of cars, trucks, and other automobiles. The websites offer detailed listings with photos, specifications, and pricing information for various makes and models.",
    demo: "https://car-mart-789fb.web.app",
    code: "https://github.com/AsrafulMasum/car-Mart-with-server",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="btn-container">
              <a
                className="demo"
                rel="noreferrer"
                target="_blank"
                href={item.demo}
              >
                See Demo
              </a>
              <a
                className="code"
                rel="noreferrer"
                target="_blank"
                href={item.code}
              >
                <FaGithub className="icon" /> See Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
