import React from "react";
import Logo from "../assets/gdsc-logo.png";
import { AiOutlineInstagram, AiFillLinkedin, BsDiscord } from "react-icons/all";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="w-[60%] md:w-[20%]">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="https://www.instagram.com/gdscmvjce/">
              <AiOutlineInstagram className="h-8" />
            </a>
            <a href="https://www.linkedin.com/company/gdsc-mvjce">
              <AiFillLinkedin className="h-8" />
            </a>
            <a href="https://discord.gg/NvC7TcTM">
              <BsDiscord className="h-8" />
            </a>
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-black md:flex-row md:items-center md:justify-center md:space-y-0 md:space-x-12">
            <a href="/" className="hover:text-[#4285F4]">
              Home
            </a>
            <a href="" className="hover:text-[#4285F4]">
              Teams
            </a>
            <a href="" className="hover:text-[#4285F4]">
              Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
