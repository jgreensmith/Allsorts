import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../dropdown/dropdown';

import './navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 1130) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 1130) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }
    

    return (
        <nav className="main-nav">
            <div className="brand-wrapper">
                <img src="/images/aslion-resize.png" alt="Allsorts logo"></img>
                <div className="brand-title">
                    <span className="brand-title__top">Allsorts</span>
                    <span className="brand-title__bottom">Pre-School</span>
                </div>
                
            </div>
            <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <Link to='/' className="nav-link" onClick={closeMobileMenu}>
                        Welcome
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-link" onClick={closeMobileMenu}>
                        About Us
                    </Link>
                </li>
                <li 
                    className="nav-item"
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    <Link to='/documents' className="nav-link" onClick={closeMobileMenu}>
                        Documents <span className="fas fa-caret-down"></span>
                    </Link>
                    {dropdown && <Dropdown/>}
                </li>
                <li className="nav-item">
                    <Link to='/calendar' className="nav-link" onClick={closeMobileMenu}>
                        School Calendar
                    </Link>
                </li> 
                <li className="nav-item">
                    <Link to='/contact' className="nav-link" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
        
        </nav>
    );  
};
export default Navbar;
