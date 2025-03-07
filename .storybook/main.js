const path = require('path');

module.exports = {
  'stories': [
    '../src/docs/**/*.mdx',
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
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
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  staticDirs: [path.resolve(__dirname, '../src/assets')],
  previewHead: (head) => (`
    ${head}
    ${process.env.NODE_ENV === 'production' ? `
      <script
        defer
        src="https://cloud.umami.is/script.js"
        data-website-id="270a6507-0235-449a-93bd-5523021ac817"
      ></script>
    ` : ''}
  `),
  docs: {}
}
