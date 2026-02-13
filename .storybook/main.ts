// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from '@storybook/react-vite';
import path, { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],

  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@chromatic-com/storybook',
    {
      name: '@storybook/preset-scss',
      options: {
        cssLoaderOptions: {
          modules: {
            auto: true,
            localIdentName: '[name]__[local]--[hash:base64:5]',
          },

        }
      }
    }
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  staticDirs: [path.resolve(__dirname, '../src/assets')],

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  features: {
    toolbars: true,
    backgrounds: false,
    actions: false,
    outline: false,
    measure: false,
    viewport: true
  }
};

export default config;
