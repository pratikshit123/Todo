import React, { useState } from "react";
import "./App.scss";
import Image from "./images/bg-desktop-dark.jpg";
import Image2 from "./images/sun.png";
import useDarkMode from 'use-dark-mode';

function AddTodo({ con, setNum, num }) {
  const [click, setClick] = React.useState(false);
  const handleChecked = () => {
    setClick(true);
    setNum(num - 1);
  };

  return (
    <div className="todo-view-section">
      <div className="todo-list-div">
        <input
          type="checkbox"
          value={con.text}
          onClick={handleChecked}
          className="checkbox"
        />
        {click === false ? (
          <label className="todo-list-label">{con.text}</label>
        ) : (
          <label className="todo-list-label">
            <del>{con.text}</del>
          </label>
        )}
      </div>
    </div>
  );
}

function Todo() {
  const [todo, setTodo] = React.useState("");
  const [num, setNum] = React.useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
    setNum(num + 1);
  };
  const [count, setCount] = React.useState([]);
  const addTodo = (text) => {
    setCount([...count, { text }]);
  };
  const clearList = () => {
    setCount([""]);
    setNum(0);
  };
    const darkMode = useDarkMode(false);
  
  return (
    <div className="todo-main-section">
      <div className="header">
        <h1 className="header-text">TODO</h1>
        <img className="dark-mode-icon" height={36} onClick={darkMode.toggle} src={Image2} />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-area"
          todo={todo}
          placeholder="Create a new todo...."
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
      <div className="todos">
        {count.map((con, index) => (
          <AddTodo con={con} index={index} setNum={setNum} num={num} />
        ))}
        <div className="todo-list-footer">
          <span className="total-todo-left">{num} items left</span>
          <span onClick={clearList} style={{ textAlign: "right" }}>
            clear completed
          </span>
        </div>
      </div>
    </div>
  );
}

function App({ addTodo }) {
  return (
    <div className="App">
      <img className="background-img" src={Image} />
      <Todo addTodo={addTodo} />
    </div>
  );
}

export default App;
