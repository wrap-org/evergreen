import type { StorybookConfig } from '@storybook/react-vite';
import path from 'node:path';

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
      name: '@storybook/addon-essentials',
      options: {
        toolbars: true,
        backgrounds: false,
        actions: false,
        outline: false,
        measure: false,
        viewport: true,
      },
    },
    '@storybook/addon-interactions',
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
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  staticDirs: [path.resolve(__dirname, '../src/assets')],
};

export default config;
