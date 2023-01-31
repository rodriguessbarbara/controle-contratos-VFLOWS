import React from "react";

const Button = ({ children, color, borderColor, ...props }) => {
  return (
  <button {...props} className={`w-full p-1 mt-4 text-white ${color} ${borderColor} rounded shadow-md `}>
    {children}
  </button>
  );
};

export default Button;
