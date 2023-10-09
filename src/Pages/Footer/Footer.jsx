
import { AiOutlineSearch } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-white">
      <div className="container mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
          <FcSportsMode className="text-yellow-700 text-[40px] "></FcSportsMode>
            <h1 className="text-xl md:text-2xl font-bold">Sports Academy</h1>
          </div>
          <div className="md:flex justify-center items-center">
            <div className="flex items-center space-x-2 bg-white rounded-full p-2 w-full md:w-3/4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-transparent focus:outline-none"
              />
              <AiOutlineSearch className="text-gray-600" />
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center space-x-4">
            <a href="https://web.facebook.com/sobuj.sorker.3">
              <FaFacebook className="text-xl" />
            </a>
            <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/saiful87//?_l=en_US">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="https://github.com/saifulaija">
              <FaGithub className="text-xl" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base">
            © 2023 - All rights reserved by Sports Academy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
