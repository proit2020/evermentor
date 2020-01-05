import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/index-clean.css';
import './assets/css/main-clean.css';

import * as serviceWorker from './serviceWorker';
// import App from './App';
import BodyComponent from './body';

// ReactDOM.render(<app />, document.getElementById('root'));
ReactDOM.render(<BodyComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
