import React from "react";
import ReactDOM from "react-dom/client"; // Atualize a importação para 'react-dom/client'

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
