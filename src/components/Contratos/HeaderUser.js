import React from "react";

const HeaderUser = ({razaoSocial, nomeFantasia, cnpj, titulo}) => {
  return (
    <>
      <div className="p-2 flex flex-row justify-between border-2 border-red-300 rounded mb-2">
        <div>
          <p className="font-semibold">Razão Social: {razaoSocial}</p>
          <p className="font-semibold">Nome Fantasia: {nomeFantasia}</p>
        </div>

        <div>
          <p>cnpj: {cnpj}</p>
        </div>
      </div>

      <div className="p-2 border-2 border-red-300 rounded mb-2">
        <p className="text-center text-lg font-semibold">
          {titulo}
        </p>
      </div>
    </>
  );
};

export default HeaderUser;
