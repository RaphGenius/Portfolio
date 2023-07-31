"use client";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
type Props = {
  orientation: "left" | "right";
  children: React.ReactNode;
};
function SideInformationsLayout({
  children,
  orientation,
}: PropsWithChildren<Props>) {
  const orientationItem =
    orientation === "left" ? "left-[20px]" : "right-[20px]";
  return (
    <motion.div
      initial={{ opacity: 0, scaleY: 0, transformOrigin: "bottom" }}
      animate={{ opacity: 1, scaleY: 1, transformOrigin: "bottom" }}
      transition={{ duration: 1.5, delay: 1 }}
      className={`fixed bottom-0 w-0 lg:w-5 origin-bottom  ${orientationItem} `}
    >
      {children}
    </motion.div>
  );
}

export default SideInformationsLayout;
