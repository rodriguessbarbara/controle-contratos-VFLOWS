import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "./acessos-mockup";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  return (
    <UserContext.Provider value={{ data , login, erro, loading}}>
      {children}
    </UserContext.Provider>
  );
};
