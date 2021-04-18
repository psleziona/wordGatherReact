import { Component } from "react";
import QuickRoundControls from './QuickRoundControls';
import QuickRoundAnswer from './QuickRoundAnswer';
import QuickRoundStats from './QuickRoundStats';
import './styles/QuickRound.scss';

class QuickRound extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            answers: []
        }
    }

    toggleStart = () => {
        if (this.state.isStarted) {
            this.props.updateDb(this.state.answers);
        }
        this.setState(prevState => {
            return {
                isStarted: !prevState.isStarted,
                answers: []
            }
        })
    }

    updateAnswers = answerObj => {
        this.setState(prevState => {
            return {
                answers: [...prevState.answers, answerObj]
            }
        })
    }

    componentWillUnmount() {
        if(this.state.answers.length > 0) {
            this.props.updateDb(this.state.answers);
        }
    }

    render() {
        let word = '';
        let rightAnswers = '';
        if (this.props.words.length > 0) {
            const wordObj = this.props.words[Math.floor(Math.random() * this.props.words.length)]
            word = wordObj.word;
            rightAnswers = wordObj.meanings;
        }
        const total = this.state.answers.length;
        const right = this.state.answers.reduce((sum, element) => {
            let isRight = Object.values(element)[0];
            return isRight?sum + 1: sum;
        }, 0);

        return (
            <div className='quickround__container'>
                <QuickRoundControls isStarted={this.state.isStarted} toggleStart={this.toggleStart} />
                {this.state.isStarted?<QuickRoundStats total={total} right={right} />:null}
                {this.state.isStarted?<QuickRoundAnswer word={word} rightAnswers={rightAnswers} update={this.updateAnswers} />:null}
            </div>
        )
    }
}

export default QuickRound;