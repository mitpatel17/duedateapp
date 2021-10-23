import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Components/Myform.css";
import app from "./Firebase/firebase";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import Header from "./Components/Header";
import { Button } from "react-bootstrap";
import "./Components/Homestyling.css";
import { doc, updateDoc, getDoc, arrayUnion } from "firebase/firestore";
import TransformText from './Components/textresult';

import { db } from "./Firebase/firebase.js";

const Home = () => {

    const [date, onChange] = useState(new Date());
    const [userid, setUserID] = useState("");
    const [task, setTask] = useState("");
    const auth = getAuth(app);
    const [resultstr, setResult] = useState([]);

    const SignOut = () => {
        signOut(auth).then(() => {
            console.log("signout success")
        }).catch((error) => {
            console.log("signout fail")

        });
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserID(user.uid);
        } else {
            console.log('no user');
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Submitting task ${task}`)
        const datestring = date.toDateString()

        const docRef = doc(db, 'task', userid.toString());

        await updateDoc(docRef, {
            [datestring]: arrayUnion(task)
        });

        console.log({ docRef });
    }

    const getArray = async (e) => {
        e.preventDefault();
        const docRef = doc(db, "task", userid.toString());
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            //taskarray is object with bunch of arrays
            const taskObj = [docSnap.data()];

            let strDate = date.toDateString();

            const result = (taskObj[0][strDate])
            let parsed = ""

            for (var property in result) {
                parsed += result[property] + ", ";
            }
            setResult(parsed)

        }
        else {
            console.log("no data");
        }

    }

    return (
        <>
            <Header />

            <div className="signinbuttonbox">


                <Calendar
                    onChange={onChange}
                    value={date}
                />

                <h2>
                </h2>

                <div className="box">
                    <h2>
                        <span className='bold'> Enter task due on:</span>{' '}
                        {date.toDateString()}
                    </h2>
                    <form onSubmit={handleSubmit}>

                        <h5>
                            Enter Task Here:
                        </h5>

                        <input
                            type="text"
                            value={task}
                            onChange={e => setTask(e.target.value,)}
                        />

                        <h3>
                        </h3>
                        <input type="submit" value="Add Task" />

                    </form>
                </div>
                <h2>
                </h2>

                <div className="box">
                    <h2>
                        <span className='bold'> Tasks due on:</span>{' '}
                        {date.toDateString()}
                    </h2>

                    <form onSubmit={getArray}>
                        <input type="submit" value="Reveal Task" />
                    </form>

                    <h4>
                        {""+resultstr+"\n"}
                    </h4>
                

                </div>
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

