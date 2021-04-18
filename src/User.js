import { Component } from "react";
import WordStat from './WordStat';
import './styles/User.scss';

class User extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.update();
    }

    render() {
        return (
            <div className='user-page__container'>
                <p>Api-key: {this.props.data.apiKey}</p>
                {this.props.data.stats.map((elem, i) =>
                    <WordStat key={i} word={elem.word} counter={elem.counter} progress={elem.progress} />)}
            </div>
        )
    }
}

export default User;