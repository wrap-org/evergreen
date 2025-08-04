import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  // Set the public directory to the assets folder in the parent src directory
  publicDir: path.resolve(__dirname, '../src/assets'),
  // Ensure the server serves files correctly
  server: {
    fs: {
      // Allow serving assets from parent directories
      allow: ['..'],
    },
  },
});
