import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on mode (development/production)
  const env = loadEnv(mode, process.cwd(), '');

  // Determine if legacy support is required based on environment variables
  const useLegacy = env.VITE_USE_LEGACY === 'true';

  // Parse the port value safely and provide fallback to 3000 if invalid
  const port = parseInt(env.VITE_PORT || '3000', 10);
  const validPort = isNaN(port) ? 3000 : port;

  return {
    mode,
    plugins: [
      react(),
      useLegacy && legacy({
        targets: ['defaults', 'not IE 11'], // IE 11 support if VITE_USE_LEGACY is true
      }),
    ].filter(Boolean), // Filter out any falsy values (e.g., if useLegacy is false)
    server: {
      host: env.VITE_SERVER_HOST || 'localhost', // Default to localhost
      port: validPort, // Validated port value
      open: env.VITE_SERVER_OPEN === 'true', // Open browser on server start
    },
    build: {
      sourcemap: env.VITE_SOURCEMAP === 'true', // Enable source maps based on env
      outDir: env.VITE_OUTPUT_DIR || 'dist', // Output directory for build
    },
  };
});
