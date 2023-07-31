"use client";
import React, { useContext, useEffect, useState } from "react";
import { navbarData } from "./data";
import { motion } from "framer-motion";
import NavbarLink from "./components/NavbarLink";
import { scrollToDirection } from "@/app/utils/scrollTo";
import { FaBars } from "react-icons/fa";
import Logo from "../items/Logo";
import SidebarMobile from "./components/SidebarMobile";
import { NavbarContext } from "@/app/context/navbarContext";
import { navbarContextType } from "@/app/types/navbarContextType";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const { tagIdSelected } = useContext(NavbarContext) as navbarContextType;

  const switchSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [tagIdSelected]);

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
  const shawodNavbar = prevScroll > 10 ? "shadow-xl " : "";

  return (
    <nav
      className={`w-full sticky z-50 top-0 ${navbarIsVisible} ${shawodNavbar} h-16   transition-all duration-200 backdrop-blur-md `}
    >
      <div className="h-full flex items-center justify-between px-8  overflow-x-hidden ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <Logo handleClick={() => scrollToDirection("top")} />
        </motion.div>
        {/* Nav leftside Desktop */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          className="  hidden md:flex  gap-2"
        >
          {navbarData.map(({ id, ...rest }) => (
            <NavbarLink key={id} {...rest} />
          ))}
        </motion.ul>
        {/* Nav leftside Mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
          onClick={switchSidebar}
          className="text-main500 border-2 md:hidden bl  border-main500 z-50 p-2"
          role="Ouvre sidebar"
        >
          <FaBars />{" "}
        </motion.button>
      </div>

      <SidebarMobile isSidebarOpen={isSidebarOpen} />
    </nav>
  );
}

export default Navbar;
