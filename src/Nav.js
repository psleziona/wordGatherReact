import { Component } from "react";
import { Link } from 'react-router-dom';
import './styles/Nav.scss';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLogged) {
            return (
                <nav className='nav'>
                    <ul className='nav__links'>
                        <Link className='nav__anchor' to='/'>
                            <li className='nav__link'>Home</li>
                        </Link>
                        <Link className='nav__anchor' to='/quick-round'>
                            <li className='nav__link'>Quick</li>
                        </Link>
                        <Link className='nav__anchor' to='/test-multi'>
                            <li className='nav__link'>Multi test</li>
                        </Link>
                        <Link className='nav__anchor' to='/user'>
                            <li className='nav__link'>{this.props.username}</li>
                        </Link>
                    </ul>
                </nav>
            )
        } else {
            return (
                <nav className='nav'>
                    <ul className='nav__links'>
                        <Link className='nav__anchor' to='/'>
                            <li className='nav__link'>Home</li>
                        </Link>
                        <Link className='nav__anchor' to='/login'>
                            <li className='nav__link'>Login</li>
                        </Link>
                        <Link className='nav__anchor' to='/register'>
                            <li className='nav__link'>Register</li>
                        </Link>
                    </ul>
                </nav>
            )
        }
    }

}

export default Nav;