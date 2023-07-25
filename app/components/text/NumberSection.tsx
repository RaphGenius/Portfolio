import React from "react";
type Props = {
  number: number;
};
function NumberSection({ number }: Props) {
  return <span className="text-main500 font-bold text-md ">{number}.</span>;
}

export default NumberSection;
