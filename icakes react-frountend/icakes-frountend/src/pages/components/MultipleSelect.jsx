import React, { useState } from "react";
import Select from "react-select";

export default function MultipleSelect() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const added = (e) => {
    setSelectedOption(e.target.value);
  };

  console.log(selectedOption);
  return (
    <select name="" id="">
      {options.map((e) => (
        <option value="">{e.value}</option>
      ))}
    </select>
  );
}
