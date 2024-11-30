import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/icap/', // Reemplaza "icap" con el nombre exacto de tu repositorio
});


