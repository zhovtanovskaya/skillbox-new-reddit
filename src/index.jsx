import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from './Header';

// Такое понимает.
ReactDOM.render(<Header />, document.getElementById({elementId:'react_root'}));
// Такого не понимает.
ReactDOM.render(<Header />, document.getElementById(elementId:'react_root'));

// // // Только после загрузки страницы.
// window.addEventListener(type: 'load', listener: () => {
//     // Что куда монтировать.
// ReactDOM.render(<Header />, document.getElementById(elementId: 'react_root'));
// });
