import SocialMediaIcon from "@/app/components/sideInformations/components/SocialMediaIcon";
import { getColorByWord } from "@/app/utils/getColorByWords";
import React from "react";
import { FiGithub } from "react-icons/fi";
function Footer() {
  return (
    <footer className=" py-6 md:py-5 h-20   bg-main300 px-4 md:px-20">
      <div className="flex flex-col justify-center items-center font-semibold text-bgColor text-xs md:text-sm ">
        <p className="text-center font-light ">
          Réalisé avec Nextjs, Tailwind, emailJS & FramerMotion
        </p>
        <h2 className="flex items-center gap-2">
          Made by Raphaël Guet{" "}
          <a target="_blank" href="https://github.com/RaphGenius">
            <FiGithub />
          </a>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
