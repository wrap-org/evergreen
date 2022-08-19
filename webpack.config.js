const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/components/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'mobius',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.ts', '.tsx', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(?<!stories\.)(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader')
          }
        ]
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
};
