import React from "react";
type Props = {
  text: string;
};
function Subtitle({ text }: Props) {
  return (
    <h3 className="text-main300  font-bold uppercase touch-pan-up ">{text} </h3>
  );
}

export default Subtitle;
