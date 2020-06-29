const path = require('path');

const NODE_ENV = process.env.NODE_ENV;

// Объект со всеми настройками для Webpack.
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
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
  }
};