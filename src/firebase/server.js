// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlSKGx2AKvGq51KWSdIEVWUVt0Tt-Un2A",
  authDomain: "baseball-5cc35.firebaseapp.com",
  projectId: "baseball-5cc35",
  storageBucket: "baseball-5cc35.appspot.com",
  messagingSenderId: "136735832969",
  appId: "1:136735832969:web:b05e623c35f4208a28ff58",
  measurementId: "G-SMMBEE9S24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);