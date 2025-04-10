import React from "react";
import { createRoot } from "react-dom/client"; // Atualizado para usar createRoot
import App from "./components/App/"; // Importa o componente App

import GlobalStyle from "./styles/global";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Cria a raiz do React

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
