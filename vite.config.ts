import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/postweb-rosebank-redesign/',
  plugins: [react()],
})
