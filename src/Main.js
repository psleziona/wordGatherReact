import { Component } from "react";

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Witaj {this.props.username}</h2>
                <p>W budowie</p>
            </div>
        );
    }
}

export default Main;