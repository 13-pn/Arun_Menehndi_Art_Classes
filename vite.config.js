import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        { src: 'public/hero/*', dest: 'hero' },
        { src: 'public/img/*', dest: 'img' },
        { src: 'public/enh/*', dest: 'enh' },
        { src: 'public/Payment_Img/*', dest: 'Payment_Img' },
        { src: 'public/wcu/*', dest: 'wcu' },
        { src: 'public/WP/*', dest: 'WP' },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
