import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDj_xwJjFqj5LUO7GgIK02h-OlxAlvqKK0",
    authDomain: "bd-travel-app.firebaseapp.com",
    databaseURL: "https://bd-travel-app.firebaseio.com",
    projectId: "bd-travel-app",
    storageBucket: "bd-travel-app.appspot.com",
    messagingSenderId: "189997678018",
    appId: "1:189997678018:web:951354d627fbe2a8fc2a5b"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;