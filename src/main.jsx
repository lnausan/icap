import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/poppins' // Ajusta según la fuente que hayas instalado
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
