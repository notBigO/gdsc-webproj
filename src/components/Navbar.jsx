import React, { useEffect, useState } from "react";
import Logo from "../assets/gdsc-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // const [fix, setFix] = useState(false);

  // function setFixed() {
  //   if (window.scrollY >= 92) {
  //     setFix(true);
  //   } else {
  //     setFix(false);
  //   }
  // }
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center container relative mx-auto ">
      <div className="flex items-center justify-between h-24">
        <div className="w-[60%] md:w-[20%]">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="hidden md:flex mr-[90px] space-x-6">
          <NavLink
            to="/"
            className="hover:text-[#4285F4] ease-in-out duration-200"
          >
            Home
          </NavLink>

          <NavLink
            to="/teams"
            className="hover:text-[#DB4437] ease-in-out duration-200"
          >
            Teams
          </NavLink>
          <NavLink
            to="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/#team-list"
            className="hover:text-[#F4B400] ease-in-out duration-200"
            target="_blank"
          >
            Community
          </NavLink>
          <a
            href="/query"
            className="hover:text-[#F4B400] ease-in-out duration-200"
          >
            Contact
          </a>
        </div>
        <button className="hidden md:block bg-[#4285F4] hover:bg-[#0F9D58] ease-in-out duration-200 text-white py-1 px-3 rounded-[50px] lg:py-3 lg:px-6">
          <Link
            to="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/"
            target="_blank"
          >
            Join Us
          </Link>
        </button>
      </div>

      <div onClick={handleNav} className="md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] text-white ease-in-out duration-500 z-50"
              : "fixed left-[-100%]"
          }
        >
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-gray-600 text-[#4285F4]">
              <a href="/">Home</a>
            </li>
            <li className="p-4 border-b border-gray-600 text-[#0F9D58]">
              <a href="/teams">Teams</a>
            </li>
            <li className="p-4 border-b border-gray-600 text-[#F4B400]">
              <a href="/query">Contact</a>
            </li>

            <li className="p-4">
              <a href="https://gdsc.community.dev/mvj-college-of-engineering-bengaluru/#team-list">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
