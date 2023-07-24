import React from "react";
type Props = {
  title: string;
};
function TitleSection({ title }: Props) {
  return <h2 className="capitalize text-main500 ">{title}</h2>;
}

export default TitleSection;
