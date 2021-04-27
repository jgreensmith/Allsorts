import React from 'react';
import { Link } from 'react-router-dom';

import './documents.scss';

function Documents() {
    return(
        <section className="section">
            <div className="block-container">
                <div className="doc-container">
                    <div className="doc-wrapper">
                        <Link to='/parent' className="doc-link">
                            <p className="doc">Parent Documents</p>
                        </Link>
                    </div>
                    <div className="doc-wrapper">
                        <Link to='/eyfs' className="doc-link">
                            <p className="doc">EYFS</p>
                        </Link>
                    </div>
                    <div className="doc-wrapper">
                        <Link to='/policies' className="doc-link">
                            <p className="doc">Policies and Procedures</p>
                        </Link>
                    </div>
                </div>
                
            </div>
        </section>
    )
};

export default Documents;