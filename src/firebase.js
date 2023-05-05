import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzi35PoR3rfAn9dIV_J7GTUwZY_iFm4Lk",
    authDomain: "irishreactone.firebaseapp.com",
    databaseURL: "https://irishreactone-default-rtdb.firebaseio.com",
    projectId: "irishreactone",
    storageBucket: "irishreactone.appspot.com",
    messagingSenderId: "451345945063",
    appId: "1:451345945063:web:955ab3d83217cae8546d42",
    measurementId: "G-8FF15W2LX1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };