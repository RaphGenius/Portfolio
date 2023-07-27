import ArrowItem from "@/app/components/items/ArrowItem";
import HighLine from "@/app/components/text/HighLine";
import { getColorByWord } from "@/app/utils/getColorByWords";
import React from "react";

function Header() {
  return (
    <header className=" px-2  relative  flex flex-col  max-w-screen-xl mx-auto ">
      <div id="home" className=" mt-10  my-auto  p-8  ">
        <h1 className="text-5xl uppercase font-roboto text-main300 font-bold  w-fit ">
          Raphaël Guet
        </h1>
        <h2 className="text-3xl font-extralight text-main500 ml-10  mt-8   ">
          Développeur Front-End
        </h2>
        <p className="ml-20  font-roboto text-tertiary mt-8 ">
          Je suis un développeur front-end spécialisé dans{" "}
          {getColorByWord("React")}, {getColorByWord("NextJs")},{" "}
          {getColorByWord("Javascript")} & {getColorByWord("NodeJS")}. Passionné
          par la création d&apos;expériences utilisateur interactives et
          fluides, j&apos;ai créé plusieurs projets personnels démontrant mon
          engagement à développer des applications innovantes et esthétiques.
          Toujours avide d&apos;apprendre et de relever de nouveaux défis, je
          suis constamment à la recherche de nouvelles façons d&apos;améliorer
          mes compétences en développement web.
        </p>
      </div>
    </header>
  );
}

export default Header;
