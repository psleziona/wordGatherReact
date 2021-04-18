import { Component } from "react";
import TestAnswer from './TestAnswer';
import './styles/Test.scss';

class TestObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            answerable: true
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.rightAnswer !== this.props.rightAnswer) {
            this.setState(prevState => {
                return {
                    answerable: true
                }
            })
        }
    }

    handleAnswer = answer => {
        this.setState(prevState => {
            return {
                answerable: false
            }
        })
        const isRight = answer == this.props.rightAnswer ? true : false;
        this.props.onAnswer(this.props.word, isRight);
        return isRight
    }

    render() {
        return (
            <div className='test-container'>
                <h4 className='test-container__title'>{this.props.word}</h4>
                <ul className='test-container__answers'>
                    {this.props.answers.map((answer, i) => <TestAnswer
                        onAnswer={this.handleAnswer}
                        key={i} answer={answer} answerable={this.state.answerable} />)}
                </ul>
            </div>
        )
    }
}

export default TestObject;