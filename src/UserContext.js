import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserInfo = ({ children }) => {
  const [data, setData] = useState([]);
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState(false);

  function getUserContracts(cnpj) {
    try {
      setErro(null);
      setCnpj(cnpj);
      cnpj.map(({ contracts }) => setData((prev) => [...prev, contracts])); // aqui eu to passando o valor do cnpj, e nao o array do cnpj
    } catch (err) {
      setErro(err.message);
    } finally {
      setErro(false);
    }
  }

  return (
    <UserContext.Provider value={{ getUserContracts, data, cnpj, erro }}>
      {children}
    </UserContext.Provider>
  );
};
