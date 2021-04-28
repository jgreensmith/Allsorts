import React from 'react';
import './contact.scss';



const Contact = () => {

    return (
        <section className="section">
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
                    <div className="map-container">
                        <iframe 
                            className="google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.7662432266666!2d-2.1030193844908163!3d53.29372228635325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a4b42dc4502a1%3A0xa51929a2fad621c1!2sAllsorts%20Pre-school%20Bollington!5e0!3m2!1sen!2suk!4v1618081181412!5m2!1sen!2suk" 
                            allowfullscreen="" 
                            loading="lazy"
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>

    )
    
}

export default Contact;    

