import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const plugins = tailwindcss()

export default defineConfig({
  plugins,
})