import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [err, setErr] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
    if (err) setErr(""); // clear stale error once user starts typing again
  }

  function addTask() {
    if (newTask.trim() !== '') {
      for (let n of task) {
        if (newTask === n.text) {
          setErr("Duplicate");
          return;
        }
      }
      setTask(t => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = task.filter((element, i) => i !== index);
    setTask(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTasks = [...task];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  function toggleComplete(index) {
    const updatedTasks = [...task];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTask(updatedTasks);
  }

  function startEdit(index) {
    setEditIndex(index);
    setEditText(task[index].text);
  }

  function saveEdit(index) {
    if (editText.trim() === '') return;
    for (let i = 0; i < task.length; i++) {
      if (i !== index && task[i].text === editText) {
        setErr("Duplicate");
        return;
      }
    }
    const updatedTasks = [...task];
    updatedTasks[index].text = editText;
    setTask(updatedTasks);
    setEditIndex(null);
    setEditText("");
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
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
              />
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <button className="save" onClick={() => saveEdit(index)}>Save</button>
                </>
              ) : (
                <span
                  className="text"
                  style={{ textDecoration: task.completed ? "line-through" : "none" }}
                >
                  {task.text}
                </span>
              )}
              <button className="delete" onClick={() => deleteTask(index)}>Delete</button>
              <button className="edit" onClick={() => startEdit(index)}>Edit</button>
              <button className="move" onClick={() => moveTaskUp(index)}>👆🏾</button>
              <button className="move" onClick={() => moveTaskDown(index)}>👇🏾</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;