/// <reference types="vitest" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { peerDependencies } from './package.json'
import path from 'path'
import react from '@vitejs/plugin-react'
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css'

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'vite-react-ts-button', // Sets the name of the generated library.
      fileName: (format) => `index.${format}.js`, // Generates the output file name based on the format.
      formats: ['cjs', 'es'], // Specifies the output formats (CommonJS and ES modules).
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)], // Defines external dependencies for Rollup bundling.
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [dts(), react(), reactScopedCssPlugin()], // Uses the 'vite-plugin-dts' plugin for generating TypeScript declaration files (d.ts).
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    include: ['**/?(*.)test.ts?(x)'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@components-creators-insights': path.resolve(__dirname, './src/components-creators-insights'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
    },
  },
})
