import React from 'react';
import app from "./Firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Components/Signinstyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import { doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "./Firebase/firebase"



const Signin = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider(app);

    const signIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user.uid)
                getData(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const getData =  async(e) => {
        const docRef = doc(db, "task", e.user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
            console.log("No such document!");
            
            const docData = {};

            setDoc(docRef, docData);
        }
    }

    return (

        <div className="background">
            <div className="title">
                <h1>
                    Welcome to Due Date Tracker!
                </h1>
            </div>
            <div className="buttonbox">
                <Button variant="outline-success" size="lg" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>

        </div>

    );

}

export default Signin;




