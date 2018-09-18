import React from 'react';
import UserActions from '../actions/userActions';

export default class UserProfile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {user: {... props.user}};
    }

    componentDidMount(){
        this.setState({state1: Date.now()});

        fetch("api/users")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        userCount: result.length
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        hasError: true
                    });
                }
            );
    }

    render(){
        return <div>
            Name: <input value={this.state.user.name} />
            <button onClick={this.props.store.dispatch(UserActions.updateUser(this.state.user))}>Update</button>
        </div>;
    }
}