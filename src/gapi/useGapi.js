// import { useEffect, useState } from "react";
// import { gapi }  from "gapi-script";

// // Client ID and API key from the Developer Console
// const CLIENT_ID = process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID;
// const API_KEY = process.env.REACT_APP_GOOGLE_DRIVE_API_KEY;

// // Array of API discovery doc URLs for APIs used by the quickstart
// const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

// const useGapi = () => {
//   const [gapi, setGapi] = useState();
//   const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);

  
//   useEffect(() => {

//     // On load, called to load the auth2 library and API client library.
//     function handleClientLoad() {
//       window.gapi.load('client', initClient);
//     };


//     if (window?.gapi?.client?.drive?.children) {
//       return setGapi(window.gapi);
//     }
//     /**
//       *  Initializes the API client library and sets up sign-in state
//       *  listeners.
//       */
//     const initClient = () => {
//       setIsLoadingGoogleDriveApi(true);
//       window.gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES
//       }).then(function() {
//           window.gapi.client.load('drive', 'v3', () => setGapi(window.gapi));
//         });
//     };

    
//   }, []);

//   return gapi;

// };



// // ##################################################

// const useGapi = () => {
//   const [documents, setDocuments] = useState([]);
//   const handleChange = (file) => {};

  // const listFiles = () => {
  //   gapi.client.drive.files
  //     .list({
  //       pageSize: 10,
  //       fields: 'nextPageToken, files(id, name)',
  //     })
  //     .then(function (response) {
  //       const res = JSON.parse(response.body);
  //       setDocuments(res.files);
  //     });
  // };

//   const initClient = () => {
//     gapi.client
//       .init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//       })
//       .then(
//         function() {
//           listFiles();
//         },
//         function (error) {}
//       );
//   }
//   function handleClientLoad() {
//     gapi.load('client:auth2', initClient);
//   };
//   return documents;
// };

//export default useGapi;
  