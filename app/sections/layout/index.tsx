import React, { PropsWithChildren } from "react";
type Props = {
  title: string;
  id: string;
};
function SectionLayout({ children, title, id }: PropsWithChildren<Props>) {
  return (
    <section id={id} className="min-h-screen px-20">
      <h2 className="font-roboto text-xl text-main500">{title} </h2>
      {children}
    </section>
  );
}

export default SectionLayout;
