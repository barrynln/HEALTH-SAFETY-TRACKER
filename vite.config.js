import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',            // <-- ADD THIS LINE
  plugins: [react()],
})
