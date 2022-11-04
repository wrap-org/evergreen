const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'mobius',
    libraryTarget: 'umd',
    clean: true,
    globalObject: 'this',
    publicPath: '',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      lib: path.resolve(__dirname, 'src/lib'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.build.json',
      }),
      new MiniCssExtractPlugin(),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(?<!stories\.)(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
          },
        ],
      },
      {
        test: /\.module\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
};
