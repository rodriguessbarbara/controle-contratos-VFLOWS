import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between gap-20 ml-8 mb-8">
      <img src={logo} alt="Logo da VFlows" className="w-24 h-12" />
      <p className="text-center text-zinc-400 font-light text-sm">Construindo Patrimônios</p>
      <p></p>
    </footer>
  );
};

export default Footer;
