import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBlesjbYGWwmjkL2SE_yXwEeYX-8WQnv4g",
    authDomain: "firegram-35b7f.firebaseapp.com",
    projectId: "firegram-35b7f",
    storageBucket: "firegram-35b7f.appspot.com",
    messagingSenderId: "249348029438",
    appId: "1:249348029438:web:91b519ba3d8f18f16c9eaf"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
export default app;