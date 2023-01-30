import React from "react";

const Input = ({ label, type, name, value, onChange, onBlur, erro }) => {
  return (
    <div>
      
      <label htmlFor={name} className="flex">
        {label}
      </label>
      <input className="mb-2 text-black border-2 border-zinc-200 rounded-md hover:border-zinc-400 focus:border-zinc-400"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro ? <p className="text-red-500">{erro}</p> : ''}

    </div>
  );
};

export default Input;
