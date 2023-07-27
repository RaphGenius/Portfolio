import React from "react";
type Props = {
  title: string;
  id: string;
};

function LabelForm({ title, id }: Props) {
  return (
    <label
      className="text-xl capitalize font-roboto text-main300  "
      htmlFor={id}
    >
      {title}
    </label>
  );
}

export default LabelForm;
