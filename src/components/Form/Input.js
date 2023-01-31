import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const Input = ({ label, type, name, value, erro, message, ...rest }) => {
  const { fieldName, registerField, defaultValue } = useField(name);
  const inputRef = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={name} className="flex">
        {label}
      </label>
      <input
        className="mb-2 text-black border-2 border-zinc-200 rounded-md hover:border-zinc-400 focus:border-zinc-400"
        ref={inputRef}
        type={type}
        name={name}
        id={name}
        value={value}
        {...rest}
      />

      {erro ? <p className="text-red-500">{erro}</p> : ""}
      {message ? <p className="font-medium text-stone-500">{message}</p> : ""}
    </div>
  );
};

export default Input;
