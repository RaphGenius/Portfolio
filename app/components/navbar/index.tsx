"use client";
import React, { useEffect, useState } from "react";
import { navbarData } from "./data";
import NavbarLink from "./components/NavbarLink";
import Link from "next/link";
import { scrollToDirection } from "@/app/utils/scrollTo";

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

  const navbarIsVisible = isVisible
    ? "-translate-y-1 opacity-100 "
    : "-translate-y-16 opacity-0 ";
  const shawodNavbar = prevScroll > 10 ? "shadow-xl h-14" : "h-20";

  return (
    <nav
      className={`w-full sticky z-50 top-0 ${navbarIsVisible} ${shawodNavbar}   transition-all duration-200 backdrop-blur-md scale-y-95   `}
    >
      <div className="flex h-full items-center justify-between px-8">
        <div
          onClick={() => scrollToDirection("top")}
          className="w-10 h-8 cursor-pointer bg-red-100 text-sm flex justify-center items-center"
        >
          Logo
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
