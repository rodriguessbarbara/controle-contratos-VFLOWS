import React from "react";

const Input = ({ label, type, name, value, onChange, onBlur, erro, message}) => {
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
        placeholder="00.000.000/0000-00"
        onChange={onChange}
        onBlur={onBlur}
      />

      {erro ? <p className="text-red-500">{erro}</p> : ''}
      {message ? <p className="font-medium text-stone-500">{message}</p> : ''}
    </div>
  );
};

export default Input;
