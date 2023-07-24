import React from "react";
type Props = {
  number: number;
};
function NumberSection({ number }: Props) {
  return <span className="text-main300 font-bold ">{number}.</span>;
}

export default NumberSection;
