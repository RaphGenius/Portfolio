import React from "react";
type Props = {
  handleClick: () => void;
};
function Logo({ handleClick }: Props) {
  return (
    <div
      role="logo"
      onClick={handleClick}
      className="w-10 h-8  text-main500 font-bold cursor-pointer p-4 border-2 border-main500 hover:bg-main300 transition-colors hover:text-bgColor rounded-sm text-sm flex justify-center items-center"
    >
      RG
    </div>
  );
}

export default Logo;
