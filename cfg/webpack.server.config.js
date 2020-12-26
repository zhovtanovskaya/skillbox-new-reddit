const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.css/;

module.exports = {
  // Готовить bundle для node, а не для
  // браузера.  Первый не будет взаимодействовать
  // c `window`, например.
  target: "node",
  // Webpack поддерживает значени 'development',
  // 'production', none'.
  mode: NODE_ENV ? NODE_ENV : 'development',
  // Точка входа в приложение.
  entry: path.resolve(__dirname, '../src/server/server.jsx'),
  output: {
    // Путь и имя серверного bundle.
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'server.jsx'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              // Включить настройки по умолчанию.
              // modules: true,
              // Включить кастомные настройки.
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              // Чтобы не собирал глобальные стили. На сервере
              // не важны стили, важен только селектор.
              // Такой опции нет в css-loader@5.0.0.  Но она есть
              // версии 3.4.2, которая в используется в курсе.
              onlyLocals: true,
            }
          }
        ],
        exclude: GLOBAL_CSS_REGEXP,
      },
      {
        test: GLOBAL_CSS_REGEXP,
        use: [
          'css-loader',
        ],
      }
    ]
  },
  optimization: {
    minimize: false,
  }
}