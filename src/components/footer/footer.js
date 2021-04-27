import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container top">
                <div className="footer-img-container">
                    <div className="img-wrapper">
                        <img src="/images/BigLottery-og.jpg"></img>
                    </div>
                    <div className="img-wrapper coop">
                        <img src="/images/favpng-coop.png"></img>
                    </div>
                    <div className="img-wrapper">
                        <p className="beer">
                            Bollington Beer Festival Community Fund
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-container btm">
                <div className="footer-object-wrapper">
                    <a href="https://www.facebook.com/AllsortsBollington" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x" className="fb-icon"/>
                    </a>  
                </div>
                <div className="footer-object-wrapper sm">
                    <small className="copyright">&copy; 2021, Allsorts Pre-School</small>
                </div>
                
                
               
            </div>
            
        </footer>
    );
};

export default Footer;