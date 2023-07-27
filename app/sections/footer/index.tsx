import SocialMediaIcon from "@/app/components/sideInformations/components/SocialMediaIcon";
import { getColorByWord } from "@/app/utils/getColorByWords";
import React from "react";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <footer className="mx-auto max-w-screen-xl py-10   px-20">
      <div className="flex flex-col justify-center items-center font-bold text-main300 text-xl">
        <p>
          Portefolio réalisé {getColorByWord("NextJs")},
          {getColorByWord("Tailwind")}, emailJS & FramerMotion
        </p>
        <p className="flex items-center">
          par Raphaël Guet{" "}
          <SocialMediaIcon
            icon={<FiGithub />}
            link="https://github.com/RaphGenius"
          />{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
