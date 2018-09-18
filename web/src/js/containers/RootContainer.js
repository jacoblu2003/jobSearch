import React from 'react';
import UserProfile from '../components/UserProfile';
import RegisterUser from "../components/RegisterUser";

export default class RootContainer extends React.Component {
    render() {
        return <div id="rootContainer">
            <RegisterUser />
        </div>;
    }
};