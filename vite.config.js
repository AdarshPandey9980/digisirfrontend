import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://api.test.hellodigisir.in/api/auth/tempLogin/', // Your Express server
  //       changeOrigin: true,
  //       secure: false, // Use false if working with HTTPS in development
  //     },
  //   },
  // },
});
