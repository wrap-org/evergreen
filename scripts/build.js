import autoprefixer from 'autoprefixer';
import * as esbuild from 'esbuild';
import { copy } from 'esbuild-plugin-copy';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';

import pkg from '../package.json' with { type: 'json' };

import { globSvgPlugin } from './esbuild-plugin-glob-svg.js';

const banner = `/*! ${pkg.name} v${pkg.version} | ${pkg.homepage} */`;

// Build ESM version with code splitting for lazy-loaded icon sets
await esbuild.build({
  entryPoints: ['src/index.ts'],
  outdir: 'dist/esm',
  banner: { js: banner },
  bundle: true,
  splitting: true,
  minify: true,
  write: true,
  format: 'esm',
  platform: 'neutral',
  target: 'es2020',
  plugins: [globSvgPlugin()],
});

// Build CJS version
await esbuild.build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/cjs/index.js',
  banner: { js: banner },
  bundle: true,
  minify: true,
  write: true,
  format: 'cjs',
  platform: 'node',
  target: 'es2020',
  plugins: [globSvgPlugin()],
});

// Build CSS styles
await esbuild.build({
  entryPoints: ['src/styles/**/*.scss'],
  outbase: 'src',
  outdir: 'dist',
  banner: { css: banner },
  bundle: true,
  minify: true,
  write: true,
  // Prevent esbuild trying to resolve these font files
  external: [
    '/fonts/MarrSansCondensed-Regular-Web.woff',
    '/fonts/MarrSansCondensed-Regular-Web.woff2',
    '/fonts/MarrSansCondensed-Bold-Web.woff',
    '/fonts/MarrSansCondensed-Bold-Web.woff2',
  ],
  plugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source, {
          from: undefined, // Including "from" voids warnings about source maps
        });
        return css;
      },
    }),
    copy({
      assets: {
        from: ['./src/assets/**/*'],
        to: ['./assets'],
      },
    }),
  ],
});
