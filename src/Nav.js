import { Component } from "react";
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav className='nav'>
                <ul className='nav__links'>
                    <Link className='nav__anchor' to='/'>
                        <li className='nav__link'>Home</li>
                    </Link>
                    <Link className='nav__anchor' to='/quick_round'>
                        <li className='nav__link'>Quick</li>
                    </Link>
                    <Link className='nav__anchor' to='/test_multi'>
                        <li className='nav__link'>Multi test</li>
                    </Link>
                    <Link className='nav__anchor' to='/stats'>
                        <li className='nav__link'>Stats</li>
                    </Link>
                    <Link className='nav__anchor' to='/login'>
                        <li className='nav__link'>Login</li>
                    </Link>
                    
                </ul>
            </nav>
        )
    }


}

export default Nav;