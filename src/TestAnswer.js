import { Component } from "react";
import './styles/Test.scss';

class TestAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAnsweredRight: null
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.answerable == false && this.props.answerable == true) {
            this.setState(prvState => {
                return {
                    isAnsweredRight: null
                }
            })
        }
    }

    handleClick = e => {
        const isTrue = this.props.onAnswer(e.target.innerText);
        console.log(isTrue);
        if (isTrue) {
            this.setState(prevState => {
                return {
                    isAnsweredRight: true
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    isAnsweredRight: false
                }
            })
        }
    }

    render() {
        const answerable = this.props.answerable;
        let bgClass = '';
        if (this.state.isAnsweredRight) {
            bgClass = 'test-container__answer--right';
        } else if (this.state.isAnsweredRight == false) {
            bgClass = 'test-container__answer--wrong';
        }
        return (
            <li className={`test-container__answer ${bgClass}`}
                onClick={answerable ? this.handleClick : null}>{this.props.answer}</li>
        )
    }
}

export default TestAnswer;