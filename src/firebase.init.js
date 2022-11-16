// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8lUS_iVRLGnGp-UTtez_oN1raxC4nyMM",
    authDomain: "genius-car-services-fce90.firebaseapp.com",
    projectId: "genius-car-services-fce90",
    storageBucket: "genius-car-services-fce90.appspot.com",
    messagingSenderId: "614906179191",
    appId: "1:614906179191:web:ffaba7e6914d14125a6072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;