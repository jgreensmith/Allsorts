import React from 'react';
import './about.scss';

const About = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <h1 className="main-title heading">About Us</h1>
                <div className="about-info-wrapper">
                    <h3 className="blurb-header">
                            Term Time Opening Hours:
                    </h3>
                    <p className="about-info">Monday to Thursday - 9am to 5pm</p>
                    <p className="about-info">Friday - 9am to 3pm</p>
                    <h3 className="blurb-header">
                            Our Aim:
                    </h3>
                    <p className="about-info">We are a small, non-profit-making pre-school.</p>
                    <p className="about-info">
                        We embrace a child led, play based learning environment,
                        promoting shared ownership of our setting - let the children lead the way

                        Our setting is committed to safeguarding and promoting the welfare of
                        children and young people and expects all staff and volunteers to share this commitment.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;