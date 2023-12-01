import React from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-4 sticky top-0 z-50 w-full shadow-md bg-white">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/">
          <img src={headerLogo} alt="Logo" height={30} width={130} />
        </a>

        {/* Nav links */}
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-500"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            height={25}
            width={25}
          ></img>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
