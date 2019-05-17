import './index.css';

import * as serviceWorker from './serviceWorker';

import React from 'react';
import Root from './layout/root';
import configureStore from './configureStore';
import { render } from 'react-dom';

const store = configureStore();

render(
    <Root store={store} />,
    document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
