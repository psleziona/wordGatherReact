import { Component } from "react";
import QuickRound from './QuickRound';

class QuickRoundContainer extends Component {
    constructor() {
        super();
        this.state = {
            words: []
        }
    }

    getWords = () => {
        fetch('https://word-gather.herokuapp.com/words', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    words: data
                })
            })
    }

    updateDb = stats => {
        if (stats.length > 0) {
            fetch('https://word-gather.herokuapp.com/words', {
                method: 'POST',
                credentials: 'include',
                mode: 'cors',
                body: JSON.stringify(stats)
            })
        }
    }

    componentDidMount() {
        this.getWords();
    }

    shouldComponentUpdate(prevProps, prevState) {
        if (prevState == this.state) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <QuickRound words={this.state.words} updateDb={this.updateDb} />
        )
    }
}

export default QuickRoundContainer;