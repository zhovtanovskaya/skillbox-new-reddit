import express from 'express';
import ReactDOM from 'react-dom/server';
import * as React from 'react';
import { Layout } from '../shared/Layout/Layout';
import { indexTemplate } from './indexTemplate';

const app = express();

// Роуты для статики настроить.
app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDOM.renderToString(<Layout>Server content.</Layout>)),
    );
});
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
