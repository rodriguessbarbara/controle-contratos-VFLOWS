import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Header from "../Header";
import Button from "../Form/Button";
import Footer from "../Footer";

const ContratosLista = () => {
  const navigate = useNavigate();
  const { dataContracts, getContract } = useContext(UserContext);
  const [erro, setErro] = useState(false);
  const [value, setValue] = useState([]);
  const [valueId, setValueId] = useState('');

  function handleChange({ target }) {
    setErro(null);

    if (target.checked) {
      setValue([...value, target.value]);
      setValueId([...valueId, dataContracts[0][Number(target.value)]])
    } else {
      setValue(value.filter((evento) => evento !== target.value));
      setValueId('')
      //setValueId(valueId.filter((evento) => evento !== valueId))
    }    
  }

  //console.log(valueId[0].id)

  function handleNextPage({ target }) {
    if (value.length) {
      if (value.length > 1) {
        setErro('Somente um Contrato deverá ser selecionado');
      } else {
        getContract(valueId[0].id);
        navigate("/detalhes");
      }
    } else{
      setErro('Ao menos um Contrato deverá ser selecionado');
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-full m-10 bg-white border-1 rounded flex flex-col">
        <Header />

        <table className="ml-5 mr-5">
          <thead className="bg-zinc-400 text-white">
            <tr>
              <th></th>
              <th>Nome do Contrato</th>
              <th>Código do Contrato</th>
              <th>Retenção Técnica</th>
              <th>Detalhes</th>
            </tr>
          </thead>

          <tbody className="m-5">
            {dataContracts.map((contract) =>
              contract.map(({ id, nome, retencao }, index) => (
                <tr
                  key={id}
                  className="odd:bg-zinc-100 even:bg-zinc-200 p-2 text-center border-2 border-white"
                >
                  <td>
                    <input
                      type="checkbox"
                      value={index}
                      onChange={handleChange}
                    />
                  </td>
                  <td>{nome}</td>
                  <td>{id}</td>
                  <td className="cursor-pointer bg-blue-500 text-white">
                    {retencao}
                  </td>
                  <td className="flex m-2 justify-center cursor-pointer bg-blue-500 text-white">
                    🔍
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {erro ? <p className="ml-5 font-semibold text-red-500">{erro}</p> : ''}

        <div className="flex gap-16 ml-8 mr-8 mb-10">
          <Button
            color="bg-yellow-500"
            borderColor="shadow-yellow-600/80"
            onClick={() => navigate("/")}
          >
            Anterior
          </Button>
          <Button
            color="bg-lime-700"
            borderColor="shadow-lime-600/80"
            onClick={handleNextPage}
          >
            Próximo
          </Button>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ContratosLista;
