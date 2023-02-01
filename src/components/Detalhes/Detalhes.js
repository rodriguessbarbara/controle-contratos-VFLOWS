import React, { useContext, useState } from "react";
import Header from "../Header";
import { Form } from "@unform/web";
import Input from "../Form/Input";
import { UserContext } from "../../UserContext";
import Footer from "../Footer";
import Button from "../Form/Button";
import { useNavigate } from "react-router-dom";

const Detalhes = () => {
  const [value, setValue] = useState("");
  const [erro, setErro] = useState(null);
  const [message, setMessage] = useState(null);
  const { dataContracts, contract } = useContext(UserContext);
  const [showImpostos, setShowImpostos] = useState(false);
  const [showTecnica, setShowTecnica] = useState(false);

  const navigate = useNavigate();

  function handleChange({ target }) {
    setMessage(null);
    setErro(null);

    if (target.checked) {
      setShowImpostos(true);
    } else {
      setShowImpostos(false);
    }

    if (showImpostos) {
      if (target.checked) {
        setShowTecnica(true);
      } else {
        setShowTecnica(false);
      }
    }
  }

  function handleNext() {
    sendData();
  }

  function sendData() {
    console.log("handlenext");
    window.alert("Solicitação 999999 foi enviada com sucesso.");
    navigate("/");
  }

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

          <Form>
            <Input
              label="Retenção de Impostos"
              type="checkbox"
              name="retencao"
              erro={erro}
              message={message}
              onChange={handleChange}
            />
          </Form>

          {showImpostos ? (
            <>
              <div className="border-2 rounded border-red-300 p-2 ml-5 mr-5 mb-2">
                <Form className="inline-flex flex-wrap gap-2 justify-around mb-8">
                  <Input
                    label="ISSQN"
                    type="number"
                    step=".01"
                    name="ISSQN"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="IIRRF"
                    type="number"
                    step=".01"
                    name="IIRRF"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="CSLL"
                    type="number"
                    step=".01"
                    name="CSLL”"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="COFINS"
                    type="number"
                    step=".01"
                    name="COFINS"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="INSS"
                    type="number"
                    step=".01"
                    name="INSS"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="PIS"
                    type="number"
                    step=".01"
                    name="PIS”"
                    erro={erro}
                    message={message}
                  />
                </Form>
              </div>

              <Form>
                <Input
                  label="Retenção Técnica"
                  type="checkbox"
                  name="retencao"
                  erro={erro}
                  message={message}
                  onChange={handleChange}
                />
              </Form>
            </>
          ) : (
            ""
          )}

          {showImpostos && showTecnica ? (
            <>
              <div className="border-2 rounded border-red-300 p-2 ml-5 mr-5 mb-2">
                <Form className="inline-flex flex-wrap gap-2 justify-between mb-8">
                  <Input
                    label="Valor"
                    type="number"
                    step=".01"
                    name="Valor"
                    erro={erro}
                    message={message}
                  />

                  <Input
                    label="Percentual"
                    type="number"
                    step=".01"
                    name="Percentual"
                    erro={erro}
                    message={message}
                  />
                </Form>
              </div>
            </>
          ) : (
            ""
          )}

          <div className="flex gap-16 ml-8 mr-8 mb-10">
            <Button
              color="bg-yellow-500"
              borderColor="shadow-yellow-600/80"
              onClick={() => navigate("/contratos")}
            >
              Anterior
            </Button>
            <Button
              color="bg-lime-700"
              borderColor="shadow-lime-600/80"
              onClick={handleNext}
            >
              Próximo
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Detalhes;
