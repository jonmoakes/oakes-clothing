import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZYMjYRNkSY87XhyMVuV-xlxlcyoCb3E8",
    authDomain: "oakes-clothing-db.firebaseapp.com",
    databaseURL: "https://oakes-clothing-db.firebaseio.com",
    projectId: "oakes-clothing-db",
    storageBucket: "",
    messagingSenderId: "623441641485",
    appId: "1:623441641485:web:ca7e24390a8ba3d1"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;