import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container top">
                <div className="footer-img-container">
                    <div className="img-wrapper">
                        <img src="/images/BigLottery.jpg"></img>
                    </div>
                    <div className="img-wrapper coop">
                        <img src="/images/coOpLogo.jpg"></img>
                    </div>
                    <div className="img-wrapper">
                        <img src="/images/BollingtonTC.jpg"></img>
                    </div>
                    <div className="img-wrapper">
                        <p className="beer">
                            Bollington Beer Festival Community Fund
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-logo-wrapper">
                    <img src="/images/aslion-resize.png" alt="Allsorts logo"></img>
                    <div className="footer-title">
                        <span className="footer-title__top">Allsorts</span>
                        <span className="footer-title__bottom">Pre-School</span>
                    </div>
                </div>
                <div className="footer-icon-container">
                    <FontAwesomeIcon icon={['fab', 'facebook-square']} size="2x"/>
                </div>
                
               
            </div>
            
        </footer>
    );
};

export default Footer;