import "./navbar.scss";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <div className="wrapper">
        <span>Masum</span>
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
