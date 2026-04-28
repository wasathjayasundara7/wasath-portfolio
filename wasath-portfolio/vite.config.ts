import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],  // include tailwindcss plugin
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Put Three.js ecosystem into a dedicated chunk
          if (id.includes('node_modules/three') ||
            id.includes('@react-three/fiber') ||
            id.includes('@react-three/drei')) {
            return 'three';
          }
          // Put framer-motion in its own chunk
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
          // All other vendor modules stay default (not explicitly chunked)
        },
      },
    },
  },
});