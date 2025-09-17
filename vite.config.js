import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/My-app-project/', // Must match your repo name with a leading slash
  plugins: [react()],
});