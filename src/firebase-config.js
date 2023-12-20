// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFcNBiqJAeLY2CcV1cQtpjEdhEyVBFcQ4",
    authDomain: "updsgo-46173.firebaseapp.com",
    projectId: "updsgo-46173",
    storageBucket: "updsgo-46173.appspot.com",
    messagingSenderId: "1041037303806",
    appId: "1:1041037303806:web:e79e3107871e4dce92eaaf",
    measurementId: "G-43TY5W5731"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);  // Agrega esta línea para exportar 'firestore'

export { firebaseApp, firestore };
