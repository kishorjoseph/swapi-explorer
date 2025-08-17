import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // This makes test functions (describe, it, expect) globally available
    environment: 'jsdom', // Use jsdom to simulate a browser environment
    setupFiles: './src/setupTests.ts', // A file to run before each test
  },
  server: {
    proxy: {
      "/api/api/" : {
      changeOrigin: true,
      target: "https://swapi.dev/",
      rewrite: (path) => path.replace(/^\/api/,"")
      }

    }
  }
})




