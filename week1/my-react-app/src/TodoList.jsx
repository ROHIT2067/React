import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [err,setErr]=useState("")

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if(newTask.trim()!==''){
        for(let n of task){
            if(newTask===n){
                setErr("Duplicate")
                return
            }
        }
        setTask(t=>[...t,newTask])
    setNewTask("")
    }
    
  }

  function deleteTask(index) {
    const updatedTasks=task.filter((element,i)=>i !==index)
    setTask(updatedTasks)
  }

  function moveTaskUp(index) {
    // console.log(index)
    if(index>0){
        const updatedTasks=[...task];
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
        setTask(updatedTasks)
    }
  }

  function moveTaskDown(index) {
    if(index<task.length-1){
    const updatedTasks=[...task];
    [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
    setTask(updatedTasks)
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To Do List</h1>
        <h4>{err}</h4>
        <div>
          <input
            type="text"
            placeholder="Enter a task!!"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="Add" onClick={addTask}>
            Add
          </button>

        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete" onClick={()=>deleteTask(index)}>Delete</button>
              <button className="move" onClick={()=>moveTaskUp(index)}>👆🏾</button>
              <button className="move" onClick={()=>moveTaskDown(index)}>👇🏾</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
