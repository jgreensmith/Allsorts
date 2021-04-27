import React from 'react';
import './about.scss';

const About = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <h1 className="main-title heading">About Us</h1>
                <div className="blurb-wrapper">
                    <h3 className="blurb-header">
                            Term Time Opening Hours:
                    </h3>
                    <p className="blurb">Monday to Friday - 8:30am to 4pm</p>
                    <h3 className="blurb-header">
                            Our Aim:
                    </h3>
                    <p className="blurb">We are a small, non-profit-making pre-school.</p>
                    <p className="blurb">
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