import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  root: 'frontend',
  plugins: [react(), tailwind()],
  // Only use /techtalkchina/ base for GitHub Pages, not Vercel
  base: '/',
  server: {
    port: 5188,
    host: true,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
}))