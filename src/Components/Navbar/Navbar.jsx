import "./navbar.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Masum
        </motion.span>
        <div className="social">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaLinkedin />
          </a>
          <a href="">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
