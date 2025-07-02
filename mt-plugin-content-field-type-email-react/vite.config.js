import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'mt-static/plugins/ContentFieldTypeEmailReact/dist',
    rollupOptions: {
      input: 'src/index.jsx',
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
})
