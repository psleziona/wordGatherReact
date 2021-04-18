import { Component } from "react";
import './styles/Register.scss';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            confirmEmail: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validData = () => {
        const {username, password, confirmPassword, email, confirmEmail} = this.state;
        if (password != confirmPassword) {
            return false
        }
        if (email != confirmEmail) {
            return false
        }
        if (!email.includes('@')) {
            return false
        }
        return true
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.validData) {
            let registerForm = new FormData()
            registerForm.append('username', this.state.username)
            registerForm.append('password', this.state.password)
            registerForm.append('e-mail', this.state.email)
            fetch('https://word-gather.herokuapp.com/register', {
                method: 'POST',
                body: registerForm
            })
        } else {
            alert('Błędnie wypełniony formularz')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>
                    Username<input type='text' onChange={this.handleInput} name='username' />
                </label>
                <label htmlFor='password'>
                    Password<input type='password' onChange={this.handleInput} name='password' />
                </label>
                <label htmlFor='confirmPassword'>
                    Confirm password<input type='password' onChange={this.handleInput} name='confirmPassword' />
                </label>
                <label htmlFor='email' type='text'>
                    E-mail<input onChange={this.handleInput} name='email' />
                </label>
                <label htmlFor='confirmEmail' type='text'>
                    Confirm e-mail<input onChange={this.handleInput} name='confirmEmail' />
                </label>
                <label htmlFor='submit'>
                    <input type='submit'value='Register' />
                </label>
            </form>
        )
    }
}

export default Register;