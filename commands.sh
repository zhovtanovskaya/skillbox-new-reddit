npx tsc -v
which tsc
npx webpack
webpack
env NODE_ENV=development webpack-dev-server
env NODE_ENV=production webpack --config cfg/webpack.server.config.js
# Показать описание пакета.
npm {info|show} css-loader      
# Запуск сервера:
# 1. Для продакшна.
npm run build-prod              # Пересобрать приложение для продакшна.
node ./dist/server/server.js    # Запустить сервер.
# 2. Для разработки с перекомпиляцией
# и пересборкой на лету (nodemon).
node ./bin/dev.js
# Создать `jest.config.js`.
npx ts-jest config:init
# Запустить тесты.
npx jest