import React, { PropsWithChildren } from "react";
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
    <div className={`fixed bottom-0 w-0 lg:w-5   ${orientationItem} `}>
      {children}
    </div>
  );
}

export default SideInformationsLayout;
