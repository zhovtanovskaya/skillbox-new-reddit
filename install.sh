# Установить зависимости.
#

# -D значит ставить в "devDependencies" в package.json.
# Т.о. они не попадут в bundle, как react и react-dom.
# -g значит ставить глобально.
npm i express
npm i -D webpack@4.43.0 webpack-cli@3.3.12
npm i -g webpack@4.43.0 webpack-cli@3.3.12
npm i react react-dom
npm i -D typescript ts-loader
npm i -D webpack-node-externals
npm i nodemon
# Установить пакеты для CSS Modules (2.5).
npm i -D style-loader@1.1.3 css-loader@3.4.2
# Установить пакеты для тестов (2.5).
npm i jest@25.1.0 ts-jest@25.2.1 @types/jest@25.1.4
# Установить поддержку синтаксиса React.js.
npm i -D @types/react @types/react-dom