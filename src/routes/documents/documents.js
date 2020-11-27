import React from 'react';
import './documents.scss';

const Documents = () => {
    return (
       <section className="section">
           <div className="block-container">
                <h1 className="main-title heading">Documents</h1>
                <div className="document-wrapper">
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">Parent Documents</h3>
                    </div>
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">EYFS</h3>
                    </div>
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">Policies</h3>
                    </div>

                </div>
           </div>
       </section>
    );
};

export default Documents;