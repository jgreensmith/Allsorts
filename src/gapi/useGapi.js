import { useEffect, useState } from "react";

// Client ID and API key from the Developer Console
const CLIENT_ID = "717447962626-241sdul3f72upvuekvusu8r09mephjtm.apps.googleusercontent.com"
const API_KEY = "AIzaSyC4cxHukrlz-m9IQmhHEOUpmrLReRa2YQ0";

// Array of API discovery doc URLs for APIs used by the quickstart
const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';

const useGapi = () => {
  const [gapi, setGapi] = useState();
  useEffect(() => {
    if (window?.gapi?.client?.drive?.children) {
      return setGapi(window.gapi);
    }
    /**
      *  Initializes the API client library and sets up sign-in state
      *  listeners.
      */
    function initClient() {
      window.gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(function() {
        window.gapi.client.load('drive', 'v3', () => setGapi(window.gapi));
      });
    };

    // On load, called to load the auth2 library and API client library.
    window.gapi.load('client:auth2', initClient);
  }, []);

  return gapi;
};

export default useGapi;
  