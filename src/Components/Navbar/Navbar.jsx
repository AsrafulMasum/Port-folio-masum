import "./navbar.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import Links from "../Sidebar/Links/Links";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="nav">
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Masum
          </motion.span>
          <div className="navigation">
            <div className="navItems">
              <Links />
            </div>
            <div className="social">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/asrafulislam.masum.3">
                <FaFacebook />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hossain-mohammad-asraful-islam-masum-4b5847200">
                <FaLinkedin />
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/AsrafulMasum">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
