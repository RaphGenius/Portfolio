import React, { PropsWithChildren } from "react";

function Paragraphe({ children }: PropsWithChildren) {
  return <p className="font-roboto text-tertiary ">{children}</p>;
}

export default Paragraphe;
