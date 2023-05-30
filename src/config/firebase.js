// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

export const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,

  authDomain:  process.env.REACT_APP_authDomain ,

  projectId:  process.env.REACT_APP_projectId,

  storageBucket:  process.env.REACT_APP_storageBucke,

  messagingSenderId: process.env.REACT_APP_messagingSenderId ,

  appId:  process.env.REACT_APP_appId

};


// Initialize Firebase

console.log("api key:", process.env.REACT_APP_API_KEY)
console.log("sii:", process.env.REACT_APP_SII)

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
export const storage = getStorage(app)