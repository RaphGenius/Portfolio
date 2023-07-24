import Link from "next/link";
import React from "react";
type Props = {
  icon: JSX.Element;
  link: string;
};
function SocialMediaIcon({ icon, link }: Props) {
  return (
    <div className="text-gray-500 hover:-translate-y-1 hover:text-main500 transition-all ">
      <Link target="_blank" href={link}>
        {icon}
      </Link>{" "}
    </div>
  );
}

export default SocialMediaIcon;
