import React from "react";
type Props = {
  title: string;
};
function TitleSection({ title }: Props) {
  return <h2 className="capitalize md:text-main500 text-bgColor ">{title}</h2>;
}

export default TitleSection;
