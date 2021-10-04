import App from './components/App'
import React from 'react';
import ReactDOM from 'react-dom';
import {rootReducer} from './reducer/rootReducer.js'
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, logger)),
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

