//Estilos
import "./estilos/normalize.css";
import "./estilos/Color.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { SuperComponente } from "./superComponente/SuperComponente";
import { Cabecera } from "./componentes/componentes-cabecera/Cabecera";

const root = ReactDOM.createRoot(document.getElementById("root"));

//render
root.render(
  <>
    <Cabecera />
    <SuperComponente />
  </>
);
