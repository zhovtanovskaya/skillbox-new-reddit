import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../shared/Header';


// Что делать после загрузки страницы.
window.addEventListener('load', () => {
    // Что куда монтировать.
    ReactDOM.render(<Header />, document.getElementById('react_root'));
});
