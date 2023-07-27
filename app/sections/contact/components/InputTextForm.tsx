import React from "react";
type Props = {
  placeholder: string;
  name: string;
  id: string;
};
function InputTextForm({ placeholder, name, id }: Props) {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      name={name}
      className="px-3 py-3 mt-4  focus:outline-main500 focus:outline-3 placeholder-gray-400 text-gray-600 relative   rounded text-sm border-0 shadow outline-none focus:outline-none  w-full"
      required
    />
  );
}

export default InputTextForm;
