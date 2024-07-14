import React from 'react';
import './welcome.scss';

const Welcome = () => {
    return (

        <div className="welcome-header">
            <div className="welcome-wrapper">
                <h1 className="main-title">
                    Welcome to Allsorts Pre-School Bollington
                </h1>
                <p className="main-title sm">
                    Reg Charity no: 1048665
                </p>
                <div className='scoop'></div>
            </div>
            <div className="ofsted-wrapper">
                <div className='poop'>

                <p className="main-title sm">
                    View our Ofsted Inspection Report!
                </p>
                </div>
                <div className='btn-wrapper'>
                <a className='the-button'  href='https://reports.ofsted.gov.uk/provider/16/304949?utm_source=&utm_medium=email&utm_campaign=report' target='_blank'>
                    <img className="ahoy" src="/images/ofsted.png"></img>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
