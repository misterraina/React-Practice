import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lodash'],
    exclude: ['react-gauge-chart'],
  },
  build: {
    rollupOptions: {
      external: ['lodash'],
    },
  },
});