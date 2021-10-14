import React from 'react';
import app from "./Firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./Components/Signinstyle.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

const Signin = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider(app);


    const signIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
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




