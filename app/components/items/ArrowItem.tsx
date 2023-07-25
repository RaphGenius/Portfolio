"use client";
import { useContext } from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";
import { tagIdType } from "../navbar/data";
import { NavbarContext } from "@/app/context/navbarContext";
import { navbarContextType } from "@/app/types/navbarContextType";
import Link from "next/link";

function ArrowItem({ section }: { section: tagIdType }) {
  const { switchTagid } = useContext(NavbarContext) as navbarContextType;
  return (
    <div className="animate-bounce  relative text-main300 text-4xl ">
      <Link
        className="animate-spin"
        href={section}
        onClick={() => switchTagid(section)}
      >
        <BsFillArrowDownSquareFill />
      </Link>
    </div>
  );
}

export default ArrowItem;
