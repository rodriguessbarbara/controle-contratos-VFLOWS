import React, { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import Input from "../Form/Input";
import Button from "../Form/Button";
import { useNavigate } from "react-router-dom";
import { cnpjMask } from "../../utils/cnpj-mask";
import { UserContext } from "../../UserContext";
import users from "../../utils/acessos-mockup";

import { Form } from "@unform/web";
import Head from "../Head";

const validacao = {
  cnpj: {
    regex: /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2})$/,
    mensagem: "CNPJ Inválido",
  },
};

const Login = () => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();
  const { getUserContracts } = useContext(UserContext);

  function validate(value) {
    if (validacao.cnpj && !validacao.cnpj.regex.test(value)) {
      setErro(validacao.cnpj.mensagem);
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  function onChange({ target }) {
    setMessage(null);
    setErro(null);
    setValue(target.value);
  }

  async function handleSubmit(event) {
    if (validate(value)) {
      users.forEach(({ cnpj }) => {
        if (cnpj.includes(value)) {
          getUserContracts(cnpj);
          navigate("/contratos");
        } else {
          setMessage("CNPJ sem contratos ativos.");
        }
      });
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Head title="Login" description="Página inicial para login de CNPJ" />

      <div className="w-full max-w-3xl md:max-w-xl bg-white border-2 rounded-lg border-gray-300 shadow-md shadow-zinc-800/30 flex items-center justify-center flex-col p-10">
        <img src={logo} alt="logo da VFlows" className="w-24 h-24 md:w-48" />
        <h1 className="text-xl uppercase mt-6">Pagamento de Fornecedor</h1>

        <Form
          onSubmit={handleSubmit}
          className="border-2 border-zinc-100 rounded-lg pt-4 pb-12 pr-8 pl-8"
        >
          <Input
            name="cnpj"
            type="text"
            value={cnpjMask(value)}
            label="CNPJ"
            onChange={onChange}
            onBlur={() => {
              if (value.length === 0) {
                setErro("Preencha um valor");
                return false;
              }
            }}
            placeholder="00.000.000/0000-00"
            erro={erro}
            message={message}
          />

          <Button
            type="submit"
            color="bg-lime-600"
            borderColor="shadow-lime-800/80"
          >
            Acessar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
