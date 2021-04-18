import { Component } from "react";
import ProgressBar from './ProgressBar';
import './styles/User.scss';

class WordStat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='word-stat__list'>
                <li className='word-stat__item'><h3 className='word-stat__word'>{this.props.word}</h3></li>
                <li className='word-stat__item'>Showed: {this.props.counter} times</li>
                <li className='word-stat__item'><p>Progress</p></li>
                <ProgressBar progress={this.props.progress} />
            </ul>
        )
    }
}

export default WordStat;