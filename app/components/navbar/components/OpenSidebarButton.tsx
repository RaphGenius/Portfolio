import React from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
type Props = {
  handleClick: () => void;
};
function OpenSidebarButton({ handleClick }: Props) {
  return (
    <motion.button
      onClick={handleClick}
      className="text-main500 hover:text-bgColor transition-colors border-2 md:hidden bl hover:bg-main300  border-main500 z-50 p-2"
      role="Ouvre sidebar"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8, borderRadius: "10px" }}
    >
      <FaBars />{" "}
    </motion.button>
  );
}

export default OpenSidebarButton;
