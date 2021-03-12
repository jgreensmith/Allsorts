import React from 'react';
import './contact.scss';

const Contact = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <h1 className="main-title heading">
                    Contact Us
                </h1>
                <div className="contact-wrapper">
                    <div className="info-box">
                        <p className="info"><b>Allsorts Pre-School is based at:</b></p>
                        <p className="info">Bollington St Johns CE Primary School,</p>
                        <p className="info">Grimshaw Lane,</p>
                        <p className="info">Bollington</p>
                        <p className="info"> SK10 5LY</p>
                        <br></br>
                        <p className="info"><b>Please Contact Kathryn Cox:</b></p>
                        <p className="info"><b>Tel:</b> 07913 628115</p>
                        <p className="info">
                            <b>Email: </b> 
                            <a href="mailto:allsortspreschool25@gmail.com" target="_blank" rel="noreferrer">
                                allsortspreschool25@gmail.com
                            </a>
                        </p>
                    </div>
                    <div className="map-container"></div>

                </div>
            </div>
        </section>

    )
}

export default Contact;