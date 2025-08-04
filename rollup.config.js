import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import { readFileSync, readdirSync } from 'fs';
import { resolve as pathResolve } from 'path';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

const external = ['react', 'react-dom', 'react/jsx-runtime'];

// Plugin to handle ?raw imports and import.meta.glob
const handleRawImports = () => ({
  name: 'handle-raw-imports',
  resolveId(id) {
    if (id.endsWith('?raw')) {
      return id;
    }
    return null;
  },
  load(id) {
    if (id.endsWith('?raw')) {
      const filePath = id.replace('?raw', '');
      try {
        const content = readFileSync(filePath, 'utf8');
        return `export default ${JSON.stringify(content)};`;
      } catch (err) {
        console.warn(`Could not load raw file: ${filePath}`);
        return `export default "";`;
      }
    }
    return null;
  },
  transform(code, id) {
    // Handle import.meta.glob for icons
    if (id.includes('icons.ts') && code.includes('import.meta.glob')) {
      // Create static version of icons
      const iconsDir = pathResolve('./src/components/content/Icon/icons');
      const functionalDir = pathResolve('./src/components/content/Icon/functional');
      const distinctiveDir = pathResolve('./src/components/content/Icon/distinctive');
      
      try {
        const icons = readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
        const functional = readdirSync(functionalDir).filter(f => f.endsWith('.svg'));
        const distinctive = readdirSync(distinctiveDir).filter(f => f.endsWith('.svg'));
        
        const iconsObj = icons.reduce((acc, file) => {
          const key = file.replace('.svg', '');
          const content = readFileSync(pathResolve(iconsDir, file), 'utf8');
          acc[key] = content;
          return acc;
        }, {});
        
        const functionalObj = functional.reduce((acc, file) => {
          const key = file.replace('.svg', '');
          const content = readFileSync(pathResolve(functionalDir, file), 'utf8');
          acc[key] = content;
          return acc;
        }, {});
        
        const distinctiveObj = distinctive.reduce((acc, file) => {
          const key = file.replace('.svg', '');
          const content = readFileSync(pathResolve(distinctiveDir, file), 'utf8');
          acc[key] = content;
          return acc;
        }, {});
        
        return `
export const icons = ${JSON.stringify(iconsObj)};
export const functionalIcons = ${JSON.stringify(functionalObj)};
export const distinctiveIcons = ${JSON.stringify(distinctiveObj)};

export const iconKeys = ${JSON.stringify(Object.keys(iconsObj))};
export const functionalIconKeys = ${JSON.stringify(Object.keys(functionalObj))};
export const distinctiveIconKeys = ${JSON.stringify(Object.keys(distinctiveObj))};

export type IconName = ${Object.keys(iconsObj).map(k => `"${k}"`).join(' | ') || 'string'};
export type FunctionalIconName = ${Object.keys(functionalObj).map(k => `"${k}"`).join(' | ') || 'string'};
export type DistinctiveIconName = ${Object.keys(distinctiveObj).map(k => `"${k}"`).join(' | ') || 'string'};

export default icons;
        `;
      } catch (err) {
        console.warn('Could not read icon directories, using empty objects');
        return `
export const icons = {};
export const functionalIcons = {};
export const distinctiveIcons = {};
export const iconKeys = [];
export const functionalIconKeys = [];
export const distinctiveIconKeys = [];
export type IconName = string;
export type FunctionalIconName = string;
export type DistinctiveIconName = string;
export default icons;
        `;
      }
    }
    return null;
  }
});

const commonPlugins = [
  handleRawImports(),
  resolve({
    browser: true,
    preferBuiltins: false,
  }),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    presets: [
      ['@babel/preset-env', { modules: false }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
    ],
  }),
];

// Individual component entry points
const componentEntries = [
  'button',
  'icon', 
  'input',
  'modal',
  'card',
  'grid',
  'alert',
  'loading-button',
  'collapse'
];

const configs = [
  // ESM build - main bundle
  {
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/esm/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
      postcss({
        extract: 'dist/styles/main.css',
        minimize: true,
        sourceMap: true,
        use: [
          ['sass', {
            includePaths: ['node_modules', 'src'],
            silenceDeprecations: ['legacy-js-api']
          }]
        ],
      }),
      copy({
        targets: [
          { src: 'src/assets/fonts/**/*', dest: 'dist/assets/fonts' },
          { src: 'src/components/content/Icon/icons/**/*', dest: 'dist/assets/icons' },
          { src: 'src/components/content/Icon/distinctive/**/*', dest: 'dist/assets/distinctive' },
          { src: 'src/components/content/Icon/functional/**/*', dest: 'dist/assets/functional' },
        ],
      }),
    ],
  },

  // CommonJS build
  {
    input: 'src/index.ts',
    external,
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
    ],
  },

  // Browser UMD build (production)
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: {
      file: 'dist/browser/evergreen.min.js',
      format: 'umd',
      name: 'Evergreen',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      sourcemap: true,
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
      postcss({
        extract: 'dist/browser/evergreen.css',
        minimize: true,
        sourceMap: true,
      }),
    ],
  },

  // Browser UMD build (development)
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: {
      file: 'dist/browser/evergreen.js',
      format: 'umd',
      name: 'Evergreen',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
      sourcemap: true,
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
      postcss({
        extract: false, // Inline CSS for dev build
        minimize: false,
        sourceMap: true,
      }),
    ],
  },
];

// Add individual component builds
componentEntries.forEach(component => {
  // ESM build for individual component
  configs.push({
    input: `src/${component}.ts`,
    external,
    output: {
      file: `dist/esm/${component}.js`,
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
      postcss({
        extract: false, // Inline CSS for individual components
        minimize: true,
        sourceMap: true,
        use: [
          ['sass', {
            includePaths: ['node_modules', 'src'],
            silenceDeprecations: ['legacy-js-api']
          }]
        ],
      }),
    ],
  });

  // CommonJS build for individual component
  configs.push({
    input: `src/${component}.ts`,
    external,
    output: {
      file: `dist/cjs/${component}.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    plugins: [
      ...commonPlugins,
      typescript({
        tsconfig: './tsconfig.rollup.json',
        declaration: false,
      }),
      postcss({
        extract: false, // Inline CSS for individual components
        minimize: true,
        sourceMap: true,
        use: [
          ['sass', {
            includePaths: ['node_modules', 'src'],
            silenceDeprecations: ['legacy-js-api']
          }]
        ],
      }),
    ],
  });
});

export default configs;