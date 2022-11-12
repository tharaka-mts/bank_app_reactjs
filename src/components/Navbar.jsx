import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  // Navmenu
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/*  Navbar Links */}

      <ul className="list-none sm:flex hidden flex-1 justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px] text-white ${
              navLinks === navLinks.length - 1 ? "mr-0" : "mr-10"
            } hover:text-cyan-300`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        {/* Mobile Menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute right-0 top-20 mx-4 my-2 min-w-[150px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col flex-1 justify-end items-center">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal text-[16px] text-white ${
                  navLinks === navLinks.length - 1 ? "mr-0" : "mb-3"
                } hover:text-cyan-300`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
