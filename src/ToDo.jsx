import React, { useState } from "react";
import "./todo.css"

const ToDo = () => {
  const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower","Walk the dog"]);
  const [newtask, setNewTask] = useState("");

  function handlleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {}
  function deleteTask(index) {}
  function moveTaskUp(index) {}

  function moveTaskDown(index) {}
  console.log(tasks)

  return (
    <>
      <div className="to-do-list">
        <h1>to-do-list</h1>
        <div>
          <input
            className="input-income"
            type="text"
            placeholder="Enter a task..."
            value={newtask}
            onChange={handlleInputChange}
          />
          <button className="add-button" onClick={addTask}>
            Add
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => 
            <li key={index}>
              <span>{task}</span>
              <button
                className="delete-button"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="up-button"
                onClick={() => moveTaskUp(index)}
              >
                UP
              </button>
              <button
                className="down-button"
                onClick={() => moveTaskDown(index)}
              >
                DOWN
              </button>
            </li>
          )}
        </ol>
      </div>
    </>
  );
};

export default ToDo;
