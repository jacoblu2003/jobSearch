import React from 'react';

export default class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {state1: 5};
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
        return <div>kjjst77kjlate1: {this.state.state1}</div>;
    }
}