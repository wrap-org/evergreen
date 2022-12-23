#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const babel = require('@rollup/plugin-babel').default;
const commonjs = require('@rollup/plugin-commonjs');
const resolve = require('@rollup/plugin-node-resolve').default;
const typescript = require('@rollup/plugin-typescript').default;
const rollup = require('rollup');
const copy = require('rollup-plugin-copy');
const postcss = require('rollup-plugin-postcss');

// see below for details on the options
const inputOptions = {
  input: path.resolve(__dirname, '../src/index.tsx'),
  external: ['react'],
  plugins: [
    resolve(),
    typescript(),
    commonjs({
      include: /node_modules/,
      requireReturnsDefault: 'auto',
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
    }),
    postcss({
      modules: true,
      extract: 'components.css',
      minimize: true,
    }),
    // Get the custom icons
    copy({
      targets: [
        {
          src: 'src/components/content/Icon/custom-icons/**/*',
          dest: 'dist/custom-icons',
        },
      ],
    }),
  ],
};

const outputOptions = [
  {
    file: 'dist/index.cjs.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
];

async function build() {
  // create bundle
  const bundle = await rollup.rollup(inputOptions);
  // loop through the options and write individual bundles
  outputOptions.forEach(async (options) => {
    await bundle.write(options);
  });
}

build();
