# Установить зависимости.
#

# -D значит ставить в "devDependencies" в package.json.
# Т.о. они не попадут в bundle, как react и react-dom.
# -g значит ставить глобально.
npm i express
npm i -D webpack webpack-cli
npm i -g webpack webpack-cli
npm i react react-dom
npm i -D typescript ts-loader
npm i -D webpack-node-externals
npm i nodemon
# Установить пакеты для CSS Modules (2.5).
npm install -D style-loader@1.1.3 css-loader@3.4.2
