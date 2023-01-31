import React, { useContext, useState } from "react";
import Header from "../Header";
import { Form } from "@unform/web";
import Input from "../Form/Input";
import { UserContext } from "../../UserContext";
import Footer from "../Footer";

const Detalhes = () => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);
  const [message, setMessage] = useState(null);
  const { data, dataContracts, contract } = useContext(UserContext);

  // function onChange({ target }) {
  //   setMessage(null);
  //   setErro(null);
  //   setValue(target.value);
  // }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full m-10 bg-white border-1 rounded flex flex-col">
        <div className="ml-5 mr-5">
          <Header />

          <div className="flex gap-16 mb-4">
            <div className="flex flex-row gap-1">
              <p className="font-semibold">Código do Contrato: </p>
              <p className="font-normal">{contract[0]}</p>
            </div>
            <p>{contract[1]}</p>
          </div>

          <Form className="flex justify-between mb-8">
            <Input
              label="Numero da nota"
              type="number"
              name="nota"
              erro={erro}
              message={message}
            />

            <Input
              label="Data Emissão"
              type="date"
              name="dataEmissao"
              erro={erro}
              message={message}
            />

            <Input
              label="Data Vencimento"
              type="date"
              name="dataVencimento"
              erro={erro}
              message={message}
            />

            <Input
              label="Valor"
              type="number"
              step=".01"
              name="valor"
              erro={erro}
              message={message}
            />
          </Form>

          <input label="Retenção de Impostos" type="checkbox" />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Detalhes;
