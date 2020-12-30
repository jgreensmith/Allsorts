import React from 'react';
import './parent-documents.scss';

const ParentDocuments = () => {
    return (
       <section className="section">
           <div className="block-container">
                <h1 className="main-title heading">Parent Documents</h1>
                <div className="document-wrapper">
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">Reg form</h3>
                    </div>
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">FEEE</h3>
                    </div>
                    <div className="document-object">
                        <div className="document-box"></div>
                        <h3 className="document-header">another dutty reg form</h3>
                    </div>

                </div>
           </div>
       </section>
    );
};

export default ParentDocuments;