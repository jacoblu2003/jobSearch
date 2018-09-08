import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {userCount: 100};
    }

    render() {
        return <div>Hello World5! {this.state.userCount}</div>;
    }

    componentDidMount() {
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
}

ReactDOM.render(<Index/>, document.getElementById("root"));