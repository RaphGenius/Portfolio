import React from "react";
type Props = {
  number: number;
};
function NumberSection({ number }: Props) {
  return (
    <span className="md:text-main500 text-bgColor  font-bold text-md ">
      {number}.
    </span>
  );
}

export default NumberSection;
