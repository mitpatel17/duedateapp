import React from 'react';
import app from "./Firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

    <button onClick={signIn}>
        Sign In with Google
    </button>

);

}

export default Signin;




