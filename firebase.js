import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD8bwWIibG9XxdpXCqIER2M4X_xmsJy8Yw",
    authDomain: "whatsapp-shakthi.firebaseapp.com",
    projectId: "whatsapp-shakthi",
    storageBucket: "whatsapp-shakthi.appspot.com",
    messagingSenderId: "176358601395",
    appId: "1:176358601395:web:c0ccfb5ccb9aee6e6af6c6"
  };


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
