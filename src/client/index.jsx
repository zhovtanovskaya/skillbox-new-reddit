import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "../App";


// Что делать после загрузки страницы.
window.addEventListener('load', () => {
    // Что куда монтировать.
    ReactDOM.hydrate(<App />, document.getElementById('react_root'));
});
