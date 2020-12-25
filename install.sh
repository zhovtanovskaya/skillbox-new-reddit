# Установить зависимости.
#

# -D значит ставить в "devDependencies" в package.json.
# Т.о. они не попадут в bundle, как react и react-dom.
# -g значит ставить глобально.
+npm i -D webpack@4.43.0 webpack-cli@3.3.12
+npm i -g webpack@4.43.0 webpack-cli@3.3.12
npm i react react-dom
npm i -D typescript ts-loader
npm i -D html-webpack-plugin
npm install -D webpack-dev-server
npm install -g webpack-dev-server