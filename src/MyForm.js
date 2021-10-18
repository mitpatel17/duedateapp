import React, { useState } from "react";
import "./Components/Myform.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import app from "./Firebase/firebase.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "./Firebase/firebase.js";

function MyForm() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [userid, setUserID] = useState("");

  const auth = getAuth(app);
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
    const taskobj = { task };
    const taskdate = { date };

    const docRef = doc(db, 'task', userid.toString());

    await updateDoc(docRef, {
      task: arrayUnion(taskobj), dates: arrayUnion(taskdate)
  });
    
    console.log({docRef});
  }
  return (

    <div className="box">
      <h2>
        Add a New Task.
      </h2>
      <form onSubmit={handleSubmit}>

        <h4>
          Enter Task Here:
        </h4>

        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value,)}
        />

        <h3>
          Select Date:
        </h3>

        <DatePicker selected={date} onChange={(date) => setDate(date)} />

        <h3>
        </h3>
        <input type="submit" value="Add Task" />

      </form>
    </div>

  );
}

export default MyForm;