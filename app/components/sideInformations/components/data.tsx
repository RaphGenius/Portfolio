import { IconType } from "react-icons/lib/esm/iconBase";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

type leftSideInformationType = {
  name: string;
  logo: IconType;
  url: string;
};

export const leftSideInformation: leftSideInformationType[] = [
  {
    name: "Github",
    logo: FiGithub,
    url: "https://github.com/RaphGenius",
  },
  {
    name: "Github",
    logo: FiTwitter,
    url: "https://twitter.com/RaphIciCaDev",
  },
  {
    name: "Linkedin",
    logo: FiLinkedin,
    url: "https://www.linkedin.com/in/raphaël-guet-646942105",
  },
];
