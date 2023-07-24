import React from "react";
import { navbarDataType } from "../data";
import Link from "next/link";
import NumberSection from "../../text/NumberSection";
import TitleSection from "../../text/TitleSection";
type Props = Omit<navbarDataType, "id">;

function NavbarLink({ tagId, name, itemNumber }: Props) {
  return (
    <li className="hover:-translate-y-1 transition-transform duration-200 ">
      <Link
        className="flex gap-1 hover:opacity-80 transition-opacity items-center text-base "
        href={tagId}
      >
        <NumberSection number={itemNumber} />
        <TitleSection title={name} />
      </Link>
    </li>
  );
}

export default NavbarLink;
