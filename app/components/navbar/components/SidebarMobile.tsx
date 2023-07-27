import React from "react";
import NavbarLink from "./NavbarLink";
import { navbarData } from "../data";
type Props = {
  isSidebarOpen: boolean;
};
function SidebarMobile({ isSidebarOpen }: Props) {
  return (
    <div
      className={`w-full block md:hidden h-10 transition rounded-b-xl  bg-main300  origin-top ${
        isSidebarOpen ? "scale-y-100" : "scale-y-0"
      }  `}
    >
      <ul className="flex justify-around items-center h-full   gap-2">
        {navbarData.map(({ id, ...rest }) => (
          <NavbarLink key={id} {...rest} />
        ))}
      </ul>
    </div>
  );
}

export default SidebarMobile;
