import React, { createContext, useState } from "react";
import users from "./utils/acessos-mockup";

export const UserContext = createContext();

export const UserInfo = ({ children }) => {
  const [data, setData] = useState([]);
  const [dataContracts, setDataContracts] = useState([]);
  const [cnpj, setCnpj] = useState("");
  const [erro, setErro] = useState(false);

  function getUserContracts(cnpjData) {
    try {
      setErro(null);
      setCnpj(cnpjData);
      users.map((user) => {
        if (user.cnpj.includes(cnpjData)) {
          setData((prev) => [...prev, user.razaoSocial, user.nomeFantasia])
          setDataContracts((prev) => [...prev, user.contracts])
        }
      });
    } catch (err) {
      setErro(err.message);
    } finally {
      setErro(false);
    }
  }

  return (
    <UserContext.Provider value={{ getUserContracts, data, dataContracts, cnpj, erro }}>
      {children}
    </UserContext.Provider>
  );
};
