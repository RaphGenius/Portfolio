import React, { PropsWithChildren } from "react";

function Paragraphe({ children }: PropsWithChildren) {
  return <p className="mt-4  font-roboto text-tertiary ">{children}</p>;
}

export default Paragraphe;
