import { getApp, getApps, initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDUWdOANwsPKl78rMvLAzgg_ysr7kST-c8",
    authDomain: "codepen-d7387.firebaseapp.com",
    projectId: "codepen-d7387",
    storageBucket: "codepen-d7387.appspot.com",
    messagingSenderId: "725271468244",
    appId: "1:725271468244:web:64565e75d138252f130341"
  };


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db }; 