import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDXOFrJ4eaH19DW4sCvLeH8o6Gtk7pTF08",
    authDomain: "e-commerce-e2f66.firebaseapp.com",
    projectId: "e-commerce-e2f66",
    storageBucket: "e-commerce-e2f66.appspot.com",
    messagingSenderId: "494823516515",
    appId: "1:494823516515:web:9ac08414f3f0658f45cb56",
    measurementId: "G-F238B4KB3X"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore(); // récupération d'une référance de la base de données
 
  const auth = firebase.auth(); 
 
  const provider = new firebase.auth.GoogleAuthProvider(); //création d'une instance du provider de l'authentification de google
 
  export { auth, provider} ; 
  export default database ;