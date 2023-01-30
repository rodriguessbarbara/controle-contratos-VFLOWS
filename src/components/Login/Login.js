import React, { useState } from "react";
import logo from "../../assets/logo.png";
import Input from "../Input";

const validacao = {
  cnpj: {
    regex: /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/,
    mensagem: "CNPJ Inválido",
  },
};

const Login = () => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);

  console.log(validacao.cnpj);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white border-2 rounded-lg border-gray-300">
        <img src={logo} alt="logo da VFlows" className="w-24 h-24 md:w-48" />
        <h1 className="text-xl uppercase">Pagamento de Fornecedor</h1>
        <Input />
      </div>
    </div>
  );
};

export default Login;
