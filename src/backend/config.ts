import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};



const app = initializeApp(firebaseConfig);


export default firebase
