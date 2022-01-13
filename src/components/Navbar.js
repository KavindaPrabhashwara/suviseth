import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ButtonSignIn } from './ButtonSignIn';
import { ButtonSignUp } from './ButtonSignUp';
import './Navbar.css';

function Navbar() {
    const [ click, setClick ] = useState(false);
    const [ button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/Home" className="navbar-logo" onClick={ closeMobileMenu }>
                        <p id="navbar-logo-name">Suviseth</p>
                    </Link>
                    <div className='menu-icon' onClick={ handleClick }>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
                    </div>
                    <ul className={ click ? 'nav-menu active' : 'nav-menu' }>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={ closeMobileMenu }>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Services' className='nav-links' onClick={ closeMobileMenu }>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                Sign In
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={ closeMobileMenu }>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    { button && <ButtonSignIn buttonStyle='btn--outline' >Sign In</ButtonSignIn> }
                    { button && <ButtonSignUp buttonStyle='btn--outline' >Registration</ButtonSignUp> }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
