import React from "react";
import Paragraphe from "../layout/text/Paragraphe";
import HighLine from "@/app/components/text/HighLine";
import cssLogo from "../../../public/logo/CSS3_logo.svg";
import Image from "next/image";
import { logoData } from "./logoData";
import Logo from "./components/Logo";
import Subtitle from "@/app/components/text/Subtitle";
function AboutSection() {
  return (
    <article className="flex justify-between w-full gap-8">
      <div className="w-1/2 bg-gradient-to-t h-full from-main500/5 to-main300/10 p-2 rounded-tl-xl rounded-br-xl ">
        <Subtitle text="Je parle de moi !" />
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
          <HighLine text="HTMl" color="text-[#ee5f25]" /> et{" "}
          <HighLine text="CSS" color="text-[#08a7e2]" />. Le{" "}
          <HighLine text="Javascript" color="text-yellow-500" /> m&apos;a
          apporté ce que j&apos;attends d&apos;une passion, de la complexité et
          de quoi passer beaucoup de temps à se creuser la tête à résoudre des
          problèmes, à créer des choses qui sortent de mon imagination. <br />
          React a ensuite été mon gros coup de coeur!
        </Paragraphe>
        <Paragraphe>
          Toujours avide de nouveaux défis, je cherche continuellement à
          apprendre de nouvelles choses et à perfectionner mon art ! 😊
        </Paragraphe>
      </div>
      <div className="w-1/2 bg-gradient-to-b  from-main500/5 to-main300/10 p-2 ">
        <Subtitle text="Mes stacks" />
        <div className=" grid gap-4 grid-cols-3 h-fit  mt-2">
          {logoData.map(({ url, alt }) => (
            <Logo key={alt} url={url} alt={alt} width={90} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default AboutSection;
