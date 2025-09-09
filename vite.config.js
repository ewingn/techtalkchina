// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  root: 'frontend',
  plugins: [react(), tailwind()],
  base: '/techtalkchina/',  // 👈 repo name
  server: {
    port: 5188,
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
