import React from 'react';
import userActions from '../actions/userActions';
import {connect} from 'react-redux';

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            msgType: '',
            username: '',
            password: '',
            password2: ''
        };
    }

    handleUsernameChange(event) {
        this.clearMsg();
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.clearMsg();
        this.setState({password: event.target.value});
    }

    handlePassword2Change(event) {
        this.clearMsg();
        this.setState({password2: event.target.value});
    }

    registerUser() {
        const {username, password} = this.state;

        if (!username || !password) {
            this.setMsg("Username or password is empty");
            return;
        }

        if (!this.checkPasswordMatch()) {
            return;
        }

        this.props.onRegisterUser({
            username,
            password
        }).then(
            () => this.setMsg("User registration successful"),
            () => this.setMsg("User registration failed")
        );
    }

    setMsg(msg) {
        this.setState({msg});
    }

    clearMsg() {
        this.setState({msg: ''});
    }

    checkPasswordMatch() {
        if (this.state.password != this.state.password2) {
            this.setMsg('Passwords do not match');
            return false;
        }
        return true;
    }

    componentDidUpdate(prevProps, prevStates) {
    }

    render() {
        return <form>
            <div>Username: <input onChange={this.handleUsernameChange.bind(this)}/></div>
            <div>Password: <input type="password" onChange={this.handlePasswordChange.bind(this)}/></div>
            <div>Confirm Password: <input type="password" onChange={this.handlePassword2Change.bind(this)}/></div>
            <button type="button" onClick={this.registerUser.bind(this)}>Register</button>
            <div>{this.state.msg}</div>
        </form>;
    }
};

export default connect(
    () => ({}),
    dispatch => ({
        onRegisterUser: user => dispatch(userActions.registerUser(user))
    })
)(RegisterUser);