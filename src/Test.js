import { Component } from "react";
import TestContainer from "./TestContainer";
import './styles/Test.scss';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            countValue: '5',
            testArray: [],
            isDataSend: false
        }
    }

    getData = count => {
        fetch(`https://word-gather.herokuapp.com/test-words/${count}`, {
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                testArray: data,
                isDataSend: false
            });
        });
    }

    handleClick = () => {
        this.getData(this.state.countValue);
    }

    handleChange = e => {
        this.setState({
            countValue: e.target.value
        });
    }

    clearDataAfterUpdate = () => {
        this.setState({
            testArray: [],
            isDataSend: true
        });
    }


    render() {
        if (this.state.testArray.length == 0) {        
        return (
            <div className='multitest__container'>
                {this.state.isDataSend?<p>Odpowiedzi wysłane!</p>:null}
                <p>Wybierz ilość słówek</p>
                <select className='multitest__select-count' onChange={this.handleChange}>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                </select>
                <button className='multitest__btn' onClick={this.handleClick}>Start</button>
            </div>
        )
        } else {
            return <TestContainer tests={this.state.testArray} handleSend={this.clearDataAfterUpdate} />
        }
    }
}

export default Test;