import { Component } from "react";
import './styles/QuickRound.scss';

class QuickRoundControls extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='quickround__controls'>
                <button className='quickround__btn quickround__btn--start' disabled={this.props.isStarted} onClick={this.props.toggleStart}>Start</button>
                <button className='quickround__btn quickround__btn--finish' disabled={!this.props.isStarted} onClick={this.props.toggleStart}>Finish</button>
            </div>
        )
    }
}

export default QuickRoundControls;