"use client";
import React, { useEffect, useState } from "react";
import { navbarData } from "./data";
import NavbarLink from "./components/NavbarLink";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScroll) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setPrevScroll(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const navbarIsVisible = isVisible ? "translate-y-0" : "-translate-y-16";

  return (
    <nav
      className={`w-full sticky top-0 h-12 ${navbarIsVisible} transition-transform duration-200 backdrop-blur-md border-b border-slate-300 `}
    >
      <div className="flex h-full items-center justify-between px-8">
        <div className="w-10 h-8 bg-red-100 text-sm flex justify-center items-center">
          logo
        </div>
        <ul className="flex gap-2">
          {navbarData.map(({ id, ...rest }) => (
            <NavbarLink key={id} {...rest} />
          ))}
          <li>Mon CV</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
