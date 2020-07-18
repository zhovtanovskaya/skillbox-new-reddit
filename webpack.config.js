const clientConfig = require('./cfg/webpack.client.config.js');
const serverConfig = require('./cfg/webpack.server.config.js');

module.exports = [
    // Когда webpack получает не объект, а массив,
    // он создает bundle для каждого конфига в массиве.
    clientConfig,
    serverConfig,
];