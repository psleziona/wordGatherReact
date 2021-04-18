import { Component } from "react";
import './styles/QuickRound.scss';

class QuickRoundHint extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ul className='quickround__hints-list'>
                {this.props.answers.map((word, i) => <li className='quickround__hints-item' key={i}>{word}</li>)}
            </ul>
        )
    }
}

export default QuickRoundHint;