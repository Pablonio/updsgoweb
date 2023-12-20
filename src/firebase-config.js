// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVVi_hH2v3jYPk_WMNI-43S9Ab9QiDiX8",
  authDomain: "updsgoweb-c8d42.firebaseapp.com",
  projectId: "updsgoweb-c8d42",
  storageBucket: "updsgoweb-c8d42.appspot.com",
  messagingSenderId: "731180091466",
  appId: "1:731180091466:web:9d92271ad571904716beb3"
};

const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);  // Agrega esta línea para exportar 'firestore'

export { firebaseApp, firestore };
