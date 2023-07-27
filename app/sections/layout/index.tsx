import NumberSection from "@/app/components/text/NumberSection";
import { getColorByWord } from "@/app/utils/getColorByWords";
import React, { PropsWithChildren } from "react";
type Props = {
  title: string;
  id: string;
  number: number;
};
function SectionLayout({
  children,
  title,
  id,
  number,
}: PropsWithChildren<Props>) {
  return (
    <section
      id={id}
      className="mx-auto max-w-screen-xl pt-8 md:pt-16  px-10 md:px-20"
    >
      <h2
        className={`md:ml-8 font-roboto mb-8 text-xl relative  text-main300 after:content-[""]  font-bold after:absolute after:w-[30px] md:after:w-1/2 after:h-[1px]
         after:bg-main500  after:top-1/2 after:ml-4 `}
      >
        <div className="md:inline hidden ">
          <NumberSection number={number} />
        </div>

        {title}
      </h2>
      {children}
    </section>
  );
}

export default SectionLayout;
