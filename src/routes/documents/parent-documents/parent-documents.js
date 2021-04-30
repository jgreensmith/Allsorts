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