import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative paths also work when the dist folder is hosted under a project subpath.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2022',
    sourcemap: false,
    assetsInlineLimit: 0,
  },
});
