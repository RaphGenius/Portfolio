import { StaticImageData } from "next/image";
import Movie01 from "../../../public/projectIllustration/movies01.jpg";
import Market01 from "../../../public/projectIllustration/market01.jpg";
import Crayon01 from "../../../public/projectIllustration/crayon01.jpg";
import Todo01 from "../../../public/projectIllustration/Todo01.jpg";
export type projectsDataType = {
  title: string;
  description: string;
  stacksUsed: string[];
  url: {
    project: string;
    github: string;
  };
  image: StaticImageData;
  id: number;
};

export const projectsData: projectsDataType[] = [
  {
    title: "Movies",
    description:
      "Un site web vous renseignant sur les films, séries et artistes. Vous avez la possibilité de faire des recherches, regarder la filmographie d'un artiste ou bien visualiser une bande-annonce. Les données proviennent de l'API de TDMB.",
    stacksUsed: ["React", "Typescript", "Redux", "RTK-Query", "Tailwind"],
    url: {
      project: "https://movies-project-eta.vercel.app/",
      github: "https://github.com/RaphGenius/Movies",
    },
    image: Movie01,
    id: 0,
  },
  {
    title: "Market",
    description:
      "Site e-commerce proposant divers articles, avec pour chaque produit une description, un code couleur selon sa qualité. L'utilisateur peut s'inscrire et se connecter. La BDD est gérée avec Firebase.",
    stacksUsed: [
      "React",
      "Typescript",
      "Firebase",
      "Tailwind",
      "Framer-Motion",
    ],
    url: {
      project: "https://deluxe-hotteok-a58923.netlify.app/",
      github: "https://github.com/RaphGenius/Shop",
    },
    image: Market01,
    id: 1,
  },
  {
    title: "Crayon",
    description:
      "Landing page pour une société cherchant à mettre en relation dessinateur pro et amateur. Les profils utilisateurs ainsi que les illustrations sont générés depuis une API. Animations réalisées avec Framer-motion. Développé en mobile first.",
    stacksUsed: ["React", "Typescript", "Tailwind", "Framer-Motion", "API"],
    url: {
      project: "https://landing-page-crayon.pages.dev",
      github: "https://github.com/RaphGenius/Landing_Page",
    },
    image: Crayon01,
    id: 2,
  },

  {
    title: "Todo Liste",
    description:
      "Simple et classique Todo Liste en ligne. L'utilisateur peut se connecter et sauvegarder les tâches qu'il lui restent. La BDD est gérée avec Firebase.",
    stacksUsed: ["React", "Tailwind", "Framer-Motion", "Firebase"],
    url: {
      project: "https://tiny-puffpuff-f908ca.netlify.app/",
      github: "https://github.com/RaphGenius/TodoListe",
    },
    image: Todo01,
    id: 3,
  },
];
