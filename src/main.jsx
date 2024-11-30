import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter para manejar rutas
import '@fontsource/poppins'; // Ajusta según las fuentes instaladas
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/icap"> {/* Agrega el basename para GitHub Pages */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
