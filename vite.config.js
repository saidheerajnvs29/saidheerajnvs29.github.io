import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to a project site (username.github.io/repo) set base to '/repo/'
// For a user site (username.github.io) base should be '/'
export default defineConfig({
  base: '/',
  plugins: [react()],
})
