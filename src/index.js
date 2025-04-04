import React from 'react';
import { createRoot } from 'react-dom/client'; // Atualizado para usar createRoot

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Cria a raiz do React

function App(){
  return <h1>Component App!</h1>
}

root.render(
  <App />
);