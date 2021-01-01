// Настроить и запустить сервер на порту 3000, который
// будет отдавать клиенту (браузеру) статические файлы
// и отрендеренные на сервере компоненты.
// Сервер автоматически перезапускается при изменении
// файлов с исходным кодом.

import express from 'express';
import ReactDOM from 'react-dom/server';
import * as React from 'react';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const app = express();
// Роуты для статики настроить.
app.use('/static', express.static('./dist/client'));
app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(<App />)),
    );
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
