import React from 'react';
import './policies.scss';

const Policies = () => {
    return (
       <section className="section secondary">
           <div className="block-container">
                <h1 className="main-title heading">Policies</h1>
                <div>
                    <a href="https://drive.google.com/file/d/14Jg8rpN_WhgHAadxCB0aIcwfR9M5MFkM/view"
                     target="_blank" rel="noreferrer">
                        no smoking
                    </a>
                </div>
                <div>
                    <a href="https://drive.google.com/file/d/14I79mLEB3CjWmq7uMIdIZ4pCR8fW3XaO/view"
                     target="_blank" rel="noreferrer">
                        missing child
                    </a>
                </div>
           </div>
       </section>
    );
};

export default Policies;