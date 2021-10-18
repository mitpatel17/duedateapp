import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import app from "./Firebase/firebase";
import { getAuth, signOut } from "firebase/auth";
import Header from "./Components/Header";
import { Button } from "react-bootstrap";
import "./Components/Homestyling.css";
import MyForm from "./MyForm";

const Home = () => {

    const [date, onChange] = useState(new Date());
    const auth = getAuth(app);

    const SignOut = () => {
        signOut(auth).then(() => {
            console.log("signout success")
        }).catch((error) => {
            console.log("signout fail")
        });
    }

    return (
        <>
            <Header />

            <div className="signinbuttonbox">

                <MyForm/>
                <h2>
                </h2>
                <h2>
                    <span className='bold'> Date Selected:</span>{' '}
                    {date.toDateString()}
                </h2>

                <Calendar
                    onChange={onChange}
                    value={date}
                />

                <h2>
                </h2>

                <Button variant="outline-danger" size="lg" onClick={SignOut}>
                    Sign out
                </Button>

            </div>

        </>
    );

}

export default Home;

