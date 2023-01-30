import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { UserContext } from "../../UserContext";
import HeaderContrato from "./HeaderContrato";

const Header = () => {
  const { cnpj, data } = useContext(UserContext);
  console.log(cnpj);
  console.log(data);

  return (
    <header className="flex flex-col m-5">
      <div className="flex items-center gap-5 mb-4">
        <img src={logo} alt="Logo da VFlows" className="w-48 h-24" />
        <h1 className="text-5xl font-normal uppercase	">
          Pagamento de Fornecedor
        </h1>
      </div>

    <HeaderContrato razaoSocial="teste1" nomeFantasia="nome teste1" cnpj="12.345.678/000-00" titulo="Contratos Vinculados"/>

    </header>
  );
};

export default Header;
