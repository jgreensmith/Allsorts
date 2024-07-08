import React from 'react';
import AllsortsCarousel from '../../components/carousel';
import './welcome.scss';

const Welcome = () => {
    return (

        <header className="welcome-header">
            <div className="welcome-wrapper">
                <h1 className="main-title">
                    Welcome to Allsorts Pre-School Bollington
                </h1>
                <p className="main-title sm">
                    Reg Charity no: 1048665
                </p>
            </div>
            <AllsortsCarousel/>
        </header>
    );
};

export default Welcome;
