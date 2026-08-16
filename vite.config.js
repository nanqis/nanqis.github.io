import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site: https://nanqis.github.io — base stays '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
