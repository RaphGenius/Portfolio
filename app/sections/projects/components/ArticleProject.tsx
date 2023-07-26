import SocialMediaIcon from "@/app/components/sideInformations/components/SocialMediaIcon";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
type Props = {
  title: string;
  description: string;
  stacksUsed: string[];
  url: {
    project: string;
    github: string;
  };
  image: StaticImageData;
  orientation: "right" | "left";
};
function ArticleProject({
  title,
  description,
  stacksUsed,
  url,
  image,
  orientation,
}: Props) {
  const orientationObject = {
    left: {
      flex: "flex-row",
      text: "text-left",
      justify: "justify-end",
      positon: " -translate-x-36 hover:-translate-x-24 ",
    },
    right: {
      flex: "flex-row-reverse",
      text: "text-right",
      justify: "justify-start",
      positon: " translate-x-36 hover:translate-x-24 ",
    },
  };

  return (
    <article
      className={`relative flex mx-auto  ${orientationObject[orientation].flex} `}
    >
      <div className="w-3/5 my-auto  gap-2 z-30 px-4">
        <div className="bg-main300 rounded-lg p-4 ">
          <h3
            className={`font-bold font-roboto text-3xl mb-4 text-bgColor ${orientationObject[orientation].text} `}
          >
            {title}{" "}
          </h3>
          <div>
            <p
              className={`font-roboto  ${orientationObject[orientation].text} `}
            >
              {description}
            </p>
          </div>
        </div>
        <ul
          className={`flex gap-4 mt-2 flex-wrap ${orientationObject[orientation].flex}   `}
        >
          {stacksUsed.map((el) => (
            <li className={`font-bold font-roboto `} key={el}>
              {el}
            </li>
          ))}
        </ul>

        <div
          className={`mt-4 gap-8 flex items-baseline  text-2xl text-white  ${orientationObject[orientation].flex}   `}
        >
          <SocialMediaIcon link={url.github} icon={<FiGithub />} />
          <SocialMediaIcon link={url.project} icon={<BsBoxArrowUpRight />} />
        </div>
      </div>
      <div
        className={`w-2/5 grayscale hover:grayscale-0  opacity-80 hover:opacity-100 transition  ${orientationObject[orientation].positon} `}
      >
        <Link target="_blank" href={url.project}>
          <Image
            width={600}
            src={image}
            alt={`Illustration du project ${title}`}
          />
        </Link>
      </div>
    </article>
  );
}

export default ArticleProject;
