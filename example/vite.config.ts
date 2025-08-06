import path from 'node:path';

import { defineConfig } from 'vite';

export default defineConfig({
  // Set the public directory to the assets folder in the parent src directory
  publicDir: path.resolve(
    import.meta.dirname,
    'node_modules/@wrap.ngo/evergreen/dist/assets',
  ),
});
