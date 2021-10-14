import React from "react";
import app from "./Firebase/firebase";
import { getAuth, signOut } from "firebase/auth";



const Home = () => {

    const auth = getAuth();
    
    const SignOut = () =>{
        signOut(auth).then(() => {
            console.log("signout success")
        }).catch((error) => {
            console.log("signout fail")
        });
    }

    return (

        <>
            <h1>Home</h1>
            <button onClick={SignOut}>
                Sign out
            </button>
        </>
    );

}

export default Home;

