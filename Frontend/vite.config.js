import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, './tailwind.config.js'),
      // Other aliases...
    },
  },
  plugins: [react()]
  
})

// vite.config.js

