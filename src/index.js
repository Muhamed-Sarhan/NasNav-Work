import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/routes';
import reportWebVitals from './reportWebVitals';

const route = routes();

ReactDOM.render(route, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
