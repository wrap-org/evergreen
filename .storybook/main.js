const path = require('path');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  'framework': '@storybook/react',
  staticDirs: [path.resolve(__dirname, '../src/assets')],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, '../src/components'),
    }

    return config;
  }
}
