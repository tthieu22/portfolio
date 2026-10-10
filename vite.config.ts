import { defineConfig } from 'vite';

export default defineConfig({
  // Sử dụng relative base path để tương thích hoàn hảo với GitHub Pages hoặc bất kỳ sub-path domain nào
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild',
    target: 'es2022'
  },
  server: {
    port: 3000,
    open: false
  }
});
