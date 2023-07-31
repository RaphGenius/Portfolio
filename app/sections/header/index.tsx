"use client";
import { getColorByWord } from "@/app/utils/getColorByWords";
import { motion } from "framer-motion";
import React from "react";

function Header() {
  return (
    <header className=" px-2  relative  flex flex-col  max-w-screen-xl mx-auto ">
      <div id="home" className=" mt-10  my-auto  p-8  ">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-5xl   uppercase font-roboto text-main300 font-bold  w-full text-center  md:w-fit "
        >
          Raphaël Guet
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-3xl font-extralight text-main500 md:ml-10   mt-8 text-center md:text-start  "
        >
          Développeur Front-End
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="md:ml-20  font-roboto text-tertiary mt-8  "
        >
          Je suis un développeur front-end spécialisé dans{" "}
          {getColorByWord("React")}, {getColorByWord("NextJs")},{" "}
          {getColorByWord("Javascript")} & {getColorByWord("NodeJS")}.<br />
          <strong>Ce que j&apos;aime le plus ?</strong> C&apos;est frapper les
          touches de mon clavier pour créer des composants fonctionnels et
          réutilisable, la gestion des states, l&apos;affichage de données
          depuis une BDD afin de créer une interface fluide et fonctionnelle.
          <br /> <strong>Dans quel but ?</strong> D&apos;abord parce que cela
          m&apos;amuse, et surtout pour que l&apos;expérience utilisateur soit
          la plus agréable possible.
        </motion.p>
      </div>
    </header>
  );
}

export default Header;
