import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import ContratosLista from './components/Contratos/ContratosLista';
import Detalhes from './components/Detalhes/Detalhes';
import Page404 from "./components/Page404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/contratos/*" element={<ContratosLista />} />
              <Route path="/detalhes" element={<Detalhes />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
