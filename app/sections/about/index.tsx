import React from "react";
import Paragraphe from "../layout/text/Paragraphe";
import { logoData } from "./logoData";
import Logo from "./components/Logo";
import { getColorByWord } from "@/app/utils/getColorByWords";
function AboutSection() {
  return (
    <article className="flex md:flex-row flex-col justify-between w-full gap-8">
      <div className=" w-full md:w-1/2 bg-gradient-to-t h-full from-main500/5 to-main300/10 p-8 rounded-xl ">
        <Paragraphe>
          Je m&apos;appelle{" "}
          <span className="text-main300  font-bold">Raphaël</span>, et ce que
          j&apos;aime le plus, c&apos;est taper sur mon clavier et créer plein
          de belles choses sur internet! Cela à commencer comme un simple
          passe-temps et puis cela s&apos;est très vite transformé comme
          passion.
        </Paragraphe>
        <Paragraphe>
          Autodidacte depuis toujours, j&apos;ai rapidement appris le{" "}
          {getColorByWord("HTML")} et {getColorByWord("CSS")}. Le{" "}
          {getColorByWord("Javascript")} m&apos;a apporté ce que j&apos;attends
          d&apos;une passion, de la complexité et de quoi passer beaucoup de
          temps à se creuser la tête à résoudre des problèmes, à créer des
          choses qui sortent de mon imagination. <br />
          {getColorByWord("React")} a ensuite été mon gros coup de coeur!
        </Paragraphe>
        <Paragraphe>
          Toujours avide de nouveaux défis, je cherche continuellement à
          apprendre de nouvelles choses et à perfectionner mon art ! 😊
        </Paragraphe>
      </div>
      <div className=" w-full md:w-1/2 bg-gradient-to-b h-auto from-main500/5 to-main300/10 rounded-xl p-4 ">
        <ul className=" grid gap-10 grid-cols-3     mt-2">
          {logoData.map(({ url, alt }) => (
            <Logo key={alt} url={url} alt={alt} width={90} />
          ))}
        </ul>
      </div>
    </article>
  );
}

export default AboutSection;
