import SocialMediaIcon from "@/app/components/sideInformations/components/SocialMediaIcon";
import { getColorByWord } from "@/app/utils/getColorByWords";
import React from "react";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl pt-10 pb-4  px-8 md:px-20">
      <div className="flex flex-col justify-center items-center font-semibold text-main300 text-xs md:text-sm ">
        <p className="text-center">
          Portefolio réalisé {getColorByWord("NextJs")},
          {getColorByWord("Tailwind")}, emailJS & FramerMotion
        </p>
        <h2 className="flex items-center gap-2">
          par Raphaël Guet{" "}
          <SocialMediaIcon
            icon={<FiGithub />}
            link="https://github.com/RaphGenius"
          />{" "}
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
