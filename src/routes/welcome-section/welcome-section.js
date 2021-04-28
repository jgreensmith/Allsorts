import React from 'react';
import './welcome-section.scss';

const WelcomeSection = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <div className="media-object">
                    <div className="icon-wrapper-left">
                        <img className="icon-size" src="/images/explore.jpg"></img>
                    </div>
                    <div className="blurb-wrapper-right">
                        <h3 className="blurb-header">
                            Explore
                        </h3>
                        <p className="blurb">
                            Our indoor and outdoor environments enable children to be inquisitive, investigate and experience new things.
                        </p>
                    </div>
                </div>
                <div className="media-object">
                    <div className="icon-wrapper-right">
                        <img className="icon-size" src="/images/create.jpg"></img>
                    </div>
                    <div className="blurb-wrapper-left">
                        <h3 className="blurb-header">
                            Create
                        </h3>
                        <p className="blurb">
                            Children are supported to develop their own ideas, selecting and using resources as they choose.
                        </p>
                    </div>
                </div>
                <div className="media-object">
                    <div className="icon-wrapper-left">
                        <img className="icon-size" src="/images/learn.jpg"></img>
                    </div>
                    <div className="blurb-wrapper-right">
                        <h3 className="blurb-header">
                            Learn
                        </h3>
                        <p className="blurb">
                        Children are highly engaged in their play, leading to deeper level meaningful learning, supported by skilful staff in the teachable moment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;