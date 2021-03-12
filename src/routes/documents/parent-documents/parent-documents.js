import React, { useEffect, useState } from 'react';
import useGapi from '../../../gapi/useGapi';
import './parent-documents.scss';

const ParentDocuments = () => {

    const gapi = useGapi();
    const [documents, setDocuments] = useState();
    const driveId = "1sMTNLUFO1egvgRJpB1MwuEXnZCEPMxK7";
   
    function retrieveAllFilesInFolder() {
        
        setDocuments(gapi.client.drive.files.list({
            'driveId' : driveId
        }));
    }

    

    useEffect(() => {
        if (gapi) retrieveAllFilesInFolder();
    }, [gapi]);

    return (
       <section className="section">
           <div className="block-container">
                <h1 className="main-title heading">Parent Documents</h1>
                <div className="document-wrapper">
                    {documents?.length ? documents.map((file) => (
                        <div className="document-object">
                            <div className="document-box">
                                <iframe src={file.webViewLink}></iframe>
                            </div>
                            <h3 className="document-header">Reg form</h3>
                        </div>
                    )): null}
                    
                    

                </div>
           </div>
       </section>
    );
};

export default ParentDocuments;