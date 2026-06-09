import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- Este es el ÚNICO import correcto de Tailwind

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- El plugin se encarga de llamar a Oxide por detrás, tú no tienes que hacer nada
  ],
})