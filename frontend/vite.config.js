import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload': 'https://asdp-g3cm.onrender.com/',
      '/clean': 'https://asdp-g3cm.onrender.com/',
      '/report': 'https://asdp-g3cm.onrender.com/',
      '/download_data': 'https://asdp-g3cm.onrender.com/',
      '/login': 'https://asdp-g3cm.onrender.com/',
      '/register': 'https://asdp-g3cm.onrender.com/',
      '/profile': 'https://asdp-g3cm.onrender.com/',
      '/logout': 'https://asdp-g3cm.onrender.com/',
      '/admin': 'https://asdp-g3cm.onrender.com/',
      '/admin/summary': 'https://asdp-g3cm.onrender.com/',
      '/avatars': 'https://asdp-g3cm.onrender.com/',
      '/healthz': 'https://asdp-g3cm.onrender.com/',
      '/me': 'https://asdp-g3cm.onrender.com/'
    }
  }
})
