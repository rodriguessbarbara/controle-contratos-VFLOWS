import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";
import HeaderUser from "./Contratos/HeaderUser";

const Header = () => {
  const navigate = useNavigate();
  const { cnpj, data } = useContext(UserContext);
  let title = '';

  useEffect(() => {
    if (!cnpj) navigate("/");
  }, [navigate, cnpj]);

  if (window.location.pathname === '/detalhes') {
    title = 'Dados da Nota Fiscal'
  } else if (window.location.pathname === '/contratos'){
    title = 'Contratos Vinculados'
  }

  return (
    <>
      <header className="flex flex-col m-5">
        <div className="flex items-center gap-5 mb-4">
          <img src={logo} alt="Logo da VFlows" className="w-48 h-24" />
          <h1 className="text-5xl font-normal uppercase md:text-3xl	sm:text-md">
            Pagamento de Fornecedor
          </h1>
        </div>
      </header>
      <HeaderUser
        razaoSocial={data[0]}
        nomeFantasia={data[1]}
        cnpj={cnpj}
        titulo={title}
      />
    </>
  );
};

export default Header;
