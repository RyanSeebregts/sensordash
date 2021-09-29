import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig =  {
    apiKey: "AIzaSyArcHR-u520-pvwa75P9dTqmn9Q-0xuQfk",
    authDomain: "testsensor-50e80.firebaseapp.com",
    databaseURL: "https://testsensor-50e80-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testsensor-50e80",
    storageBucket: "testsensor-50e80.appspot.com",
    messagingSenderId: "15455856559",
    appId: "1:15455856559:web:2b0ce1e3f3a8fd206b315a"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export default db