import React from 'react';

import './parent-documents.scss';

const ParentDocuments = () => {
    



    return(
        <section className="section">
            <div className="block-container">
                <h1 className="main-title heading">Parent Documents</h1>
                <div className="document-list-wrapper">
                    <iframe src="https://drive.google.com/embeddedfolderview?id=1sMTNLUFO1egvgRJpB1MwuEXnZCEPMxK7#list" className="document-list"></iframe>

                </div>
            </div>
        </section>
    );
};

export default ParentDocuments;




//###################################################








// import React, { useEffect, useState } from 'react';
// //import useGapi from '../../../gapi/useGapi';
// import { gapi } from 'gapi-script';

// import './parent-documents.scss';

// // Client ID and API key from the Developer Console
// const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
// const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

// // Array of API discovery doc URLs for APIs used by the quickstart
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';


// const ParentDocuments = () => {
//     const [documents, setDocuments] = useState([]);
//     const driveId = "1sMTNLUFO1egvgRJpB1MwuEXnZCEPMxK7";

//     const listFiles = () => {
//         gapi?.client?.drive?.files
//             ?.list({
//                 'driveId' : driveId
//             })
//             .then(function (response) {
//                 const res = JSON.parse(response.body);
//                 setDocuments(res.files);
//             });
//     };


//     const initClient = () => {
        
//         gapi.client
//           .init({
//             apiKey: API_KEY,
//             clientId: CLIENT_ID,
//             discoveryDocs: DISCOVERY_DOCS,
//             scope: SCOPES,
//           })
//           .then(
//             function () {
//               listFiles();
//             },
//             function (error) {}
//         );
//     };

//     const handleClientLoad = () => {
//         gapi.load('client:auth2', initClient);
//     };


//     return (
//         <section className="section">
//             <div className="block-container">
//                  <h1 className="main-title heading">Parent Documents</h1>
//                  <div className="document-list-wrapper" onLoad={() => handleClientLoad()}
//                  >
                     
//                     {documents?.length ? documents.map((file) => (
//                         <a href={file} target="_blank" rel="noreferrer">
//                             <h3 className="document-header">{file.name}</h3>
//                         </a>
//                     )) : null}
                     
                     
 
//                  </div>
//             </div>
//         </section>
//     );
// };
 
//  export default ParentDocuments;



















//#################################################


// const ParentDocuments = () => {

//     const gapi = useGapi();
//     const [documents, setDocuments] = useState();
//     const driveId = "1sMTNLUFO1egvgRJpB1MwuEXnZCEPMxK7";
    

//     useEffect(() => {
//         function retrieveAllFilesInFolder() {
            
//             gapi?.client?.drive?.files
//                 .list({
//                     'driveId' : driveId
//                 })
//                 .then(function (response) {
//                 const res = JSON.parse(response.body);
//                 setDocuments(res.files);
//                 });
            
        
//             // setDocuments(gapi.client.drive.files.list({
//             //     'driveId' : driveId
//             // }));
//         };

//         if (gapi) retrieveAllFilesInFolder();
//     }, [gapi]);

//     console.log(documents);

//     return (
//        <section className="section">
//            <div className="block-container">
//                 <h1 className="main-title heading">Parent Documents</h1>
//                 <div className="document-list-wrapper" onload="this.onload=function(){};handleClientLoad()"
//                 onreadystatechange="if (this.readyState === 'complete') this.onload()">
                    
//                     {documents?.length ? documents.map((file) => (
//                     <a href={file} target="_blank" rel="noreferrer">
//                         <h3 className="document-header">{file.name}</h3>
//                     </a>
//                     )) : null}
                    
                    

//                 </div>
//            </div>
//        </section>
//     );
// };

// export default ParentDocuments;

    // function appendPre(message) {
    //     var pre = document.getElementById('content');
    //     var textContent = document.createTextNode(message + '\n');
    //     pre.appendChild(textContent);
    // }

    // function listFiles() {
    //     gapi.client.drive.files.list({
    //       'pageSize': 10,
    //       'fields': "nextPageToken, files(id, name)"
    //     }).then(function(response) {
    //       appendPre('Files:');
    //       var files = response.result.files;
    //       if (files && files.length > 0) {
    //         for (var i = 0; i < files.length; i++) {
    //           var file = files[i];
    //           appendPre(file.name + ' (' + file.id + ')');
    //         }
    //       } else {
    //         appendPre('No files found.');
    //         
    //       }
    //     });
    // }