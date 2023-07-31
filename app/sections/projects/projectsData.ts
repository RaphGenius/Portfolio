import { StaticImageData } from "next/image";
import movieImage from "../../../public/projectIllustration/moviesImage.jpg";
import marketImage from "../../../public/projectIllustration/marketImage.jpg";
import crayonImage from "../../../public/projectIllustration/crayonImage.jpg";
import todoImage from "../../../public/projectIllustration/todoImage.jpg";
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
      github: "https://github.com/RaphGenius/Shop",
    },
    image: movieImage,
    id: 0,
  },
  {
    title: "Market",
    description:
      "Site e-commerce proposant divers articles, avec pour chaque produit une description, un code selon la qualité. L'utilisateur peut s'inscrire et se connecter. La BDD est gérée avec Firebase.",
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
    image: marketImage,
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
    image: crayonImage,
    id: 2,
  },

  {
    title: "Todo Liste",
    description:
      "Simple et classique Todo Liste en ligne. L'utilisateur peut se connecter et sauvegarder les tâches qu'ils lui restent. Base de Données utilisateur avec Firebase.",
    stacksUsed: ["React", "Tailwind", "Framer-Motion", "Firebase"],
    url: {
      project: "https://tiny-puffpuff-f908ca.netlify.app/",
      github: "https://github.com/RaphGenius/TodoListe",
    },
    image: todoImage,
    id: 3,
  },
];
