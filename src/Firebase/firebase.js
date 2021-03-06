
import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    databaseURL: 'https://{dudedatetracker}.firebaseio.com',
    apiKey: "AIzaSyCGqbGdKhsF50Ji56dFA9L-dRWTCvk9GwM",
    authDomain: "dudedatetracker.firebaseapp.com",
    projectId: "dudedatetracker",
    storageBucket: "dudedatetracker.appspot.com",
    messagingSenderId: "187474483040",
    appId: "1:187474483040:web:30e1bbca1af8d4aa55f005",
    measurementId: "G-6HWKN6SP2F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;



