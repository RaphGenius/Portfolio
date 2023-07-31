"use client";
import NumberSection from "@/app/components/text/NumberSection";
import { useInView } from "framer-motion";
import React, { PropsWithChildren, useRef } from "react";
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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isInViewSection = useInView(sectionRef, { once: true });
  const isInViewTitle = useInView(titleRef, { once: true });
  return (
    <section
      id={id}
      style={{
        transform: isInViewSection ? "none" : "translateX(-200px)",
        opacity: isInViewSection ? 1 : 0,
        transition: "all 1000ms cubic-bezier(0.17, 0.55, 0.55, 1) ",
      }}
      ref={sectionRef}
      className="mx-auto max-w-screen-xl pt-8 md:pt-16  px-10 md:px-20"
    >
      <h2
        ref={titleRef}
        style={{
          transform: isInViewTitle ? "none" : "translateX(-200px)",
          opacity: isInViewTitle ? 1 : 0,
          transition: "all 1000ms cubic-bezier(0.17, 0.55, 0.55, 1) ",
        }}
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
