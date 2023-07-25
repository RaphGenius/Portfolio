"use client";
import { createContext, useState } from "react";
import { navbarContextType } from "../types/navbarContextType";
import { tagIdType } from "../components/navbar/data";
type Props = {
  children: React.ReactNode;
};
export const NavbarContext = createContext<navbarContextType | null>(null);

const NavbarProvider = ({ children }: Props) => {
  const [tagIdSelected, setTagIdSelected] = useState<tagIdType | null>(null);

  const switchTagid = (tagId: tagIdType | null) => setTagIdSelected(tagId);

  return (
    <NavbarContext.Provider value={{ tagIdSelected, switchTagid }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
