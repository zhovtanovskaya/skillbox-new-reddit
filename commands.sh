npx tsc -v
which tsc
npx webpack
env NODE_ENV=development webpack-dev-server
env NODE_ENV=production webpack --config cfg/webpack.server.config.js
# Пересобрать приложение для продакшна.
npm run build-prod
webpack
# Запустить сервер для разработки.
node ./dist/server/server.js
# Запустить сервер для разработки
# с перекомпиляцией на лету (nodemon).
node ./bin/dev.js