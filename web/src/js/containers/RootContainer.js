import React from 'react';
import Test from '../components/Test';
import { hot } from 'react-hot-loader';

const App = class RootContainer extends React.Component {
    render() {
        return <div id="rootContainer">
            <Test/>
        </div>;
    }
};

export default hot(module)(App);