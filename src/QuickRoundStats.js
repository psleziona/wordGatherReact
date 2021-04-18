import { Component } from "react";
import './styles/QuickRound.scss';

class QuickRoundStats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='quickround__stats'>
                <p>Total: {this.props.total}</p>
                <p>Right: {this.props.right}</p>
            </div>
        )
    }
}

export default QuickRoundStats;