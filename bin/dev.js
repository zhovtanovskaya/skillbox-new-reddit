// Запустить сервер для разработки с перекомпиляцией 
// на лету:
// $ node ./bin/dev.js
// Это альтернатива ручному вызову следующей
// пары команд:
// $ npm run build-prod              # Перекомпилировать исходники.
// $ node ./dist/server/server.jsx    # Запустить сервер снова.


const nodemon = require('nodemon');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const compiler = webpack(webpackConfig);
// Холодный старт.
compiler.run((err) => {
    if(err) {
       console.log('Compilation failed: ', err);
    }
    compiler.watch({}, (err) => {
        if(err) {
           console.log('Compilation failed: ', err);
        }
        console.log('Compilation succeeded.')
    });
    // Запустить компилятор в режиме "watch".
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.jsx'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ]
    });
});