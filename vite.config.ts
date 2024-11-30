import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '')
  const useLegacy = env.VITE_USE_LEGACY === 'true';
  return {
    mode,
    plugins: [
      react(),
      useLegacy && legacy({
          targets: ['defaults', 'not IE 11']
      }),
    ].filter(Boolean),
    server: {
      host: env.VITE_SERVER_HOST || 'localhost',
      port: parseInt(env.VITE_PORT || '3000', 10),
      open: env.VITE_SERVER_OPEN === 'true',
    },
    build: {
      sourcemap: env.VITE_SOURCEMAP === 'true',
      outDir: env.VITE_OUTPUT_DIR || 'dist',
    },
  };
});