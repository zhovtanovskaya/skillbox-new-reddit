const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV == 'development';
const IS_PROD = NODE_ENV == 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css/;

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
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  // Куда складывать транспилированный JS-код.  
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        // Настоить использование CSS-модулей для
        // .css-файлов.
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Включить настройки по умолчанию.
              // modules: true,
              // Включить кастомные настройки.
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              }
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        // Отказаться от использования CSS-модулей
        // для глобальных .css-файлов.
        test: GLOBAL_CSS_REGEXP,
        use: [
          'style-loader',
          'css-loader',
        ],
      }
    ]
  },
  devtool: setupDevtool()
};
