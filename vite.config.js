// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  // Your app lives in /frontend
  root: 'frontend',
  plugins: [react(), tailwind()],
  // Must match your repo name on GitHub Pages
  base: '/techtalkchina/',
  server: {
    port: 5188,
    host: true,
  },
  // Build to the repo root /dist so Actions can upload it
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
