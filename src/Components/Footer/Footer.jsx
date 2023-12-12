import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Links from "../Sidebar/Links/Links";
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="h-full flex justify-center items-center">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="navItems flex flex-wrap justify-center gap-5 mt-6 -mx-4">
            <Links />
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <a
              href=""
              className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
              aria-label="Reddit"
            >
              <FaFacebook />
            </a>

            <a
              href=""
              className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaLinkedin />
            </a>

            <a
              href=""
              className="mx-2 text-gray-300 transition-colors duration-300 hover:text-blue-500"
              aria-label="Github"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
