import firebase from 'firebase'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQ0TiJzhHkeBOIaWqCeajIiVZZeY96lyc",
    authDomain: "facebook-messenger-clone-aa39c.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-aa39c.firebaseio.com",
    projectId: "facebook-messenger-clone-aa39c",
    storageBucket: "facebook-messenger-clone-aa39c.appspot.com",
    messagingSenderId: "213749218757",
    appId: "1:213749218757:web:39eaff35a099a26ac75fac",
    measurementId: "G-8SC3R3P8H3"
});

const db = firebaseApp.firestore();

export default db;
