import React, { useState } from "react";
import { addTodo, deleteTodo, markTodo } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { completedTodoSelector, todosSelector } from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector(todosSelector);

  const [newTask, setNewTask] = useState("");

  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo(newTask));
    setNewTask("");
  };

  function deleteTask(index) {
    dispatch(deleteTodo(index));
  }
  const completedTodos = useSelector(completedTodoSelector);
  const markTaskDone = (index) => {
    dispatch(markTodo(index));
  };

  return (
    <div style={{ background: "#002d30" }}>
      <h1 style={{ color: "#a2b398" }}>Todo List</h1>
      <input
        type="text"
        value={newTask}
        placeholder="Type-Yours-Tasks"
        onChange={(e) => setNewTask(e.target.value)}
        style={{
          width: "50%",
          padding: "12px 20px",
          margin: "8px 0",
          border: "3px solid #ccc",
        }}
      />
      <button onClick={addTask} style={{ color: "brown" }}>
        Add Task
      </button>
      <ul>
        {todos.map((task, index) => (
          <li
            style={{
              background: "#343730 ",
              color: "white",
              margin: "5px",
            }}
            key={index}
          >
            {task}
            {/* <button onClick={() => deleteTask(index)}>Delete</button> */}
            <button
              onClick={() => markTaskDone(index)}
              style={{ color: "green", marginLeft: "28px" }}
            >
              Work-Done
            </button>
          </li>
        ))}
      </ul>
      <h1 style={{ color: "#a2b398" }}> completedTodos</h1>
      <ul>
        {completedTodos.map((task1, i) => (
          <li
            style={{ background: " #383839", color: "white", margin: "5px" }}
            key={i}
          >
            {task1}
            <button
              onClick={() => deleteTask(i)}
              style={{ color: "red", marginLeft: "28px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
