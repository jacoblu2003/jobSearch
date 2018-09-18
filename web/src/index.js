import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {hot} from 'react-hot-loader';
import RootContainer from './js/containers/RootContainer';
import userReducer from './js/reducers/userReducer';

require('./css/main.scss');

console.warn('BUILD: ' + process.env.NODE_ENV);

const App = process.env.NODE_ENV != 'production' ?
    hot(module)(RootContainer) : RootContainer;

const store = createStore(
    userReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);