import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/Aesthetic-Eaves-Interior-Designer/', // Add this line - replace with your repo name
    plugins: [react(), tailwindcss()],
    // ... rest of config
  };
});