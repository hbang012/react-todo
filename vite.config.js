import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import install from '@tailwindcss/vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
