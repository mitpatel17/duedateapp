import React, { useState } from "react";
import "./Myform.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MyForm() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    alert(`Submitting task ${task}`)
    const taskobj = { task };
    const taskdate = { date };
    console.log(taskobj, taskdate);
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