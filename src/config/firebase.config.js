import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZSyHh71DEXq_eKZsrVmTu8U1hYdsw744",
    authDomain: "codepen-d2e59.firebaseapp.com",
    projectId: "codepen-d2e59",
    storageBucket: "codepen-d2e59.appspot.com",
    messagingSenderId: "408151960754",
    appId: "1:408151960754:web:69dafacba30ee5f515adab",
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 