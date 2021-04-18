import { Component } from "react";
import './styles/Login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        let form = new FormData()
        form.append('name', this.state.login)
        form.append('password', this.state.password)
        fetch('https://word-gather.herokuapp.com/login', {
            method: 'POST',
            body: form,
            credentials: 'include'
        })
            .then(res => {
                if (res.status == 200) {
                    this.props.handleLogin();
                }
            })
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginTester = () => {
        let testLoginForm = new FormData()
        testLoginForm.append('name', 'pablo');
        testLoginForm.append('password', 'a');
        fetch('https://word-gather.herokuapp.com/login', {
            method: 'POST',
            body: testLoginForm,
            credentials: 'include'
        })
            .then(res => {
                if (res.status == 200) {
                    this.props.handleLogin();
                }
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='login'>
                    Username<input onChange={this.handleInput} name='login' />
                </label>
                <label htmlFor='password'>
                    Password<input type='password' onChange={this.handleInput} name='password' />
                </label>
                <label htmlFor='submit'>
                    <input type='submit' value='Login' />
                </label>
                <button onClick={this.loginTester}>Tester login</button>
            </form>
        )
    }
}

export default Login;