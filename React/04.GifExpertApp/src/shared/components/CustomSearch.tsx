import React from "react";

interface Props {
  placeholder: string;
  buttonName: string;
}

const CustomSearch = ({ placeholder, buttonName }: Props) => {
  return (
    <div>
      <input type="text" placeholder=`${placeholder}` />
      <button></button>
    </div>
  );
};

export default CustomSearch;
