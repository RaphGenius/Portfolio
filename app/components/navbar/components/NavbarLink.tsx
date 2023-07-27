"use client";
import React, { useContext, useEffect } from "react";
import { navbarDataType, tagIdType } from "../data";
import Link from "next/link";
import NumberSection from "../../text/NumberSection";
import TitleSection from "../../text/TitleSection";
import { NavbarContext } from "@/app/context/navbarContext";
import { navbarContextType } from "@/app/types/navbarContextType";
type Props = Omit<navbarDataType, "id">;

function NavbarLink({ tagId, name, itemNumber }: Props) {
  const { tagIdSelected, switchTagid } = useContext(
    NavbarContext
  ) as navbarContextType;
  const isSelectedStyle = tagIdSelected === tagId && "font-bold";

  return (
    <li className="md:hover:-translate-y-1 transition-transform duration-200 ">
      <Link
        onClick={() => switchTagid(tagId)}
        className={`flex gap-1 hover:opacity-80 transition-opacity items-baseline mr-2 lg:text-xl md:text-lg ${isSelectedStyle}  `}
        href={tagId}
      >
        <NumberSection number={itemNumber} />
        <TitleSection title={name} />
      </Link>
    </li>
  );
}

export default NavbarLink;
