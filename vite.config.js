import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-header.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
