import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { JSDOM } from 'jsdom'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/todolistreact/',
  plugins: [react()],
  test: {
    globals: true,
    environment : 'jsdom',
  }
})
