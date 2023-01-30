import React from "react";

const Button = ({ children, ...props }) => {
  return (
  <button {...props} className="w-full p-1 mt-4 text-white bg-lime-600 rounded shadow-md shadow-lime-800/80  ">
    {children}
  </button>
  );
};

export default Button;
