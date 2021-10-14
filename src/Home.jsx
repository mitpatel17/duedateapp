import React from "react";
import app from "./Firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import Header from "./Components/Header";

const Home = () => {

    const auth = getAuth(app);
    
    const SignOut = () =>{
        signOut(auth).then(() => {
            console.log("signout success")
        }).catch((error) => {
            console.log("signout fail")
        });
    }

    return (
        <>
            <Header/>

            <button onClick={SignOut}>
                Sign out
            </button>

        </>
    );

}

export default Home;

