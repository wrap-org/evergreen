import path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  // Set the public directory to the evergreen assets folder.
  publicDir: path.resolve(
    __dirname,
    '../src/assets', // this would usually be node_modules/@wrap.ngo/evergreen/src/assets
  ),
});
