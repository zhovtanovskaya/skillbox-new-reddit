const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';

function setupDevtool() {
  // Настройки для devtool.  У него их
  // множество.
  if (IS_DEV) return 'eval';
  if (IS_PROD) return false;  // Не генерировать source map'ы в продакшне.
}

// Объект со всеми настройками для Webpack.
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  // Webpack поддерживает значени 'development',
  // 'production', none'.
  mode: NODE_ENV ? NODE_ENV : 'development',
  // Откуда начинать. По абсолютному пути. 
  entry: path.resolve(__dirname, 'src/index.jsx'),
  // Куда складывать транспилированный JS-код.  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.[tj]sx?$/,
      use: ['ts-loader']
    }]
  },
  plugins: [
    new HTMLWebpackPlugin({template: path.resolve(__dirname, 'index.html')})
  ],
  // Настройки webpack-dev-server.
  devServer: {
    port: 3000,
    // Автоматически перезагружать после
    // правки исходников.
    open: true,
    // Настройка будет работать только в
    // режиме "development".  И не будет
    // работать в продакшне.
    hot: IS_DEV
  },
  devtool: setupDevtool()
};