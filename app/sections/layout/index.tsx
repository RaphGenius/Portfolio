import React, { PropsWithChildren } from "react";
type Props = {
  title: string;
  id: string;
};
function SectionLayout({ children, title, id }: PropsWithChildren<Props>) {
  return (
    <section
      id={id}
      className="mx-auto min-h-screen max-w-screen-2xl pt-16 px-20"
    >
      <h2
        className={`ml-8 font-roboto text-xl relative text-main500 after:content-[""] mb-4 font-bold after:absolute after:w-1/2 after:h-[1px] after:bg-main500 after:top-1/2 after:ml-4 `}
      >
        {title}{" "}
      </h2>
      {children}
    </section>
  );
}

export default SectionLayout;
