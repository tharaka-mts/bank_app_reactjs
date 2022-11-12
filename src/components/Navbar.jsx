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
              navLinks === navLinks.length - 1 ? "mr-0" : "mr-5"
            } hover:text-cyan-300`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} />
      </div>
    </nav>
  );
};

export default Navbar;
