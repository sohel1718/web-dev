import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfew2VnnJ8cKDSfYrWunGQEfxa3-jj8rg",
    authDomain: "web-dev-eb782.firebaseapp.com",
    databaseURL: "https://web-dev-eb782-default-rtdb.firebaseio.com",
    projectId: "web-dev-eb782",
    storageBucket: "web-dev-eb782.appspot.com",
    messagingSenderId: "862455719215",
    appId: "1:862455719215:web:47c37d0468ed88dcf02dda",
    measurementId: "G-TR6SW7H4K9"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };