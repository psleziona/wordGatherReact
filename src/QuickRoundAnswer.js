import { Component } from "react";
import QuickRoundHint from './QuickRoundHint';
import './styles/QuickRound.scss';

class QuickRoundAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrongCounter: 0,
            inputValue: '',
            showHint: false
        }
    }

    handleKeyPress = e => {
        if (e.key == 'Enter') {
            const answer = e.target.value;
            this.checkAnswer(answer);
        }
    }

    checkAnswer = answer => {
        let answerStat = {};
        if (this.props.rightAnswers.includes(answer) && !this.state.showHint) {
            answerStat = { [this.props.word]: true }
        } else {
            if (this.state.wrongCounter > 2) {
                answerStat = { [this.props.word]: false }
            } else {
                this.setState({
                    wrongCounter: this.state.wrongCounter + 1
                })
                return 0
            }
        }
        this.props.update(answerStat);
    }

    componentDidUpdate(nextProps) {
        if (nextProps != this.props) {
            this.setState({
                wrongCounter: 0,
                inputValue: '',
                showHint: false
            })
        }
    }

    handleChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleHint = () => {
        this.setState({
            showHint: true
        })
    }

    render() {
        return (
            <div>
                <h3 className='quickround__word-title'>{this.props.word}</h3>
                <label htmlFor='answer'>
                    <input className='quickround__answer-input' value={this.state.inputValue} onChange={this.handleChange} onKeyPress={this.handleKeyPress} type='text' name='answer' />
                </label>
                <p>Wrong answer counter: {this.state.wrongCounter}</p>
                {this.state.wrongCounter == 3?<button className='quickround__btn' onClick={this.handleHint}>Show answers</button>: null}
                {this.state.showHint?<QuickRoundHint answers={this.props.rightAnswers} />:null}
            </div>
        )
    }
}

export default QuickRoundAnswer;