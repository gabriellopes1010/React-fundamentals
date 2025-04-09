import React from "react";
import { createRoot } from "react-dom/client"; // Atualizado para usar createRoot
import App from "./App";

import "./index.css"; // Importando o CSS

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Cria a raiz do React

root.render(<App />);
