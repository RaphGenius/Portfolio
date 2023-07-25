import ArrowItem from "@/app/components/items/ArrowItem";
import HighLine from "@/app/components/text/HighLine";
import React from "react";

function Header() {
  return (
    <header className=" px-2 min-h-screen relative  flex flex-col  max-w-screen-2xl mx-auto ">
      <div id="home" className=" mt-10  my-auto  p-8  ">
        <h1 className="text-5xl uppercase font-roboto text-main300 font-bold  w-fit ">
          Raphaël Guet
        </h1>
        <h2 className="text-3xl font-extralight text-main500 ml-10  mt-8   ">
          Développeur Front-End
        </h2>
        <p className="ml-20  font-roboto text-tertiary mt-8 ">
          Je suis un développeur front-end spécialisé dans{" "}
          <HighLine color="text-[#61dafb] " text="React" />,{" "}
          <HighLine color="text-black" text="Next.js" />,{" "}
          <HighLine color="text-yellow-500" text="JavaScript" /> &{" "}
          <HighLine color="text-green-800" text="Node.js" />. Passionné par la
          création d&apos;expériences utilisateur interactives et fluides,
          j&apos;ai créé plusieurs projets personnels démontrant mon engagement
          à développer des applications innovantes et esthétiques. Toujours
          avide d&apos;apprendre et de relever de nouveaux défis, je suis
          constamment à la recherche de nouvelles façons d&apos;améliorer mes
          compétences en développement web.
        </p>
      </div>
    </header>
  );
}

export default Header;
