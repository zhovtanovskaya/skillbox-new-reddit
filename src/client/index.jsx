import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from '../shared/Layout/Layout';


// Что делать после загрузки страницы.
window.addEventListener('load', () => {
    // Что куда монтировать.
    ReactDOM.hydrate(<Layout>Client content.</Layout>, document.getElementById('react_root'));
});
