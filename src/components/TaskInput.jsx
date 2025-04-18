import React, { useState } from 'react'

function TaskInput({ dispatch, dark }) {
    let [inputData, setInputData] = useState("");
    let [dueDate, setDueDate] = useState("");
    const addTask = () => {
        if (!inputData.trim()) {
            alert("WRITE TASK BEFORE ADDING ")
        }
        else {
            dispatch({ type: "add",
                 payload: {
                text:inputData.trim(),
                 dueDate:dueDate
         } })
            setInputData("");
            setDueDate("");
        }
    }
    // document.addEventListener("keyup", (event) => {
    //     if (event.key == "Enter") {
    //         // addTask()
    //         console.log("1");
    //     }
    // })
    return (
        <>
            <div className="input"
                style={{ backgroundColor: dark && "gray" }}>
                <input style={{fontFamily:'serif', borderRadius:'5px', boxShadow:'0 0 5px red'}}ype="text" name="task" id="task" autoFocus
                    placeholder='ENTER YOUR TASK HERE.....'
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)} />
                      <input className='date-input'
                       type="date"
                      value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                      style={{ marginLeft: "10px" }}
                       />
                <button onClick={addTask}>ADD TASK</button>
            </div>
        </>
    );
}

export default TaskInput