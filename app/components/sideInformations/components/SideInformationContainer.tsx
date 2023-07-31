import React, { PropsWithChildren } from "react";

function SideInformationContainer({ children }: PropsWithChildren) {
  return (
    <div className='after:content-[""] after:backdrop-hue-rotate-180  after:block after:w-[2px] after:h-20 after:left-1/2 after:bg-main500 after:border-1 flex flex-col after:mx-auto'>
      <div className="flex items-center flex-col gap-3 pb-2">{children}</div>
    </div>
  );
}

export default SideInformationContainer;
