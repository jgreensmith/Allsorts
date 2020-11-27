import React from 'react';
import './welcome-section.scss';

const WelcomeSection = () => {
    return (
        <section className="section secondary">
            <div className="block-container">
                <div className="media-object">
                    <div className="icon-wrapper-left">
                        <img className="icon-size" src="/images/maggyglass.png"></img>
                    </div>
                    <div className="blurb-wrapper-right">
                        <h3 className="blurb-header">
                            Explore
                        </h3>
                        <p className="blurb">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
                <div className="media-object">
                    <div className="icon-wrapper-right">
                        <img className="icon-size" src="/images/paint-splodge.jpg"></img>
                    </div>
                    <div className="blurb-wrapper-left">
                        <h3 className="blurb-header">
                            Create
                        </h3>
                        <p className="blurb">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
                <div className="media-object">
                    <div className="icon-wrapper-left">
                        <img className="icon-size" src="/images/bulb.png"></img>
                    </div>
                    <div className="blurb-wrapper-right">
                        <h3 className="blurb-header">
                            Learn
                        </h3>
                        <p className="blurb">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;