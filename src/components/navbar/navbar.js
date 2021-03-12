
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../dropdown'
import './navbar.scss';

// Object.keys(buttonText).map((links) => {
//     const documentsDropDown = {
//         parent: "Parent Documents",
//         eyfs: "EYFS",
//         policies: "Policies and Procedures",
//     }
// })
const documentsDropDown = {
    parent: "Parent Documents",
    eyfs: "EYFS",
    policies: "Policies and Procedures",
}



const navLinks = {
    welcome: "Welcome",
    about: "About Us",
    documents: documentsDropDown,
    calendar: "School Calendar",
    contact: "Contact Us",
}

const Navbar = () => {
    
    const [topNavOpen, setTopNavOpen] = useState(false)
    
    const showDropDown = () => {
        setTopNavOpen(!topNavOpen)
    }

    const ref = useRef(null);

    useEffect(() => {
        const outsideClickHandler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setTopNavOpen(false);
                event.preventDefault();
                
            }
        };
        if (window.innerWidth <= 1130) {
            
            if(topNavOpen) {
                document.addEventListener('mousedown', outsideClickHandler);
                document.addEventListener('touchend', outsideClickHandler);
            } else {
                document.removeEventListener('mousedown', outsideClickHandler);
                document.removeEventListener('touchend', outsideClickHandler);
            }
        }

        return () => {
            document.removeEventListener('mousedown', outsideClickHandler);
            document.removeEventListener('touchend', outsideClickHandler);
        };
    }, [ref, topNavOpen]);

    
    // document.addEventListener('DOMContentLoaded', function() {
    //     window.addEventListener('scroll', makeNavbarSticky);
    //     const navbar = document.getElementById("navbar");
    //     const sticky = navbar.offsetTop;

    //     function makeNavbarSticky() {
    //         if(window.pageYOffset >= sticky) {
    //             document.body.style.paddingTop = navbar.offsetHeight + 'px';
    //             navbar.classList.add("sticky");
    //         } else {
    //             document.body.style.paddingTop = 0;
    //             navbar.classList.remove("sticky");
    //         }
    //     }
    // })


    return (
        <nav id="navbar" className="main-nav">
        <div className="brand-wrapper">
            <img src="/images/aslion-resize.png" alt="Allsorts logo"></img>
            <div className="brand-title">
                <span className="brand-title__top">Allsorts</span>
                <span className="brand-title__bottom">Pre-School</span>
            </div>
            
        </div>
        <ul className={`topnav ${topNavOpen ? "clicked" : ""}`} ref={ref}>
            {
                Object.keys(navLinks).map((link) => {
                    if (typeof navLinks[link] === 'object') {
                        return (
                            <li className="nav-item" key={link}>
                                <DropDown links = {link}/>
                            </li>
                        )    
                    }
                    return (
                        <li className="nav-item" key={link}>
                        <Link 
                            to={`/${link === 'welcome' ? '' : link}`}
                            className="nav-link" 
                            onClick={() => setTopNavOpen(false)}
                        >
                            {navLinks[link]}
                        </Link>
                        </li>               
                    )    
                })
                    
            }
            
            <li className="dropDownIcon"><button className="btn-drop-down" onClick={showDropDown}>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>  
            </button></li>
        </ul>
        
        </nav>
    );  
};
export default Navbar;
