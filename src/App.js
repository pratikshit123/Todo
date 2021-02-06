import React, { useState } from "react";
import "./App.css";
import Image from "./images/bg-desktop-dark.jpg";

function AddTodo({ con }) {
  const [click, setClick] = React.useState(false)
  return (
    <div style={{ color: "white", borderBottom: " 1px grey solid",padding:"20px" }}>
      <div style={{ textAlign: "left" }}>
        <input type="checkbox" value={con.text} onClick={(e) => setClick(true)} className="checkbox"></input>
        {click === false ? (<label style={{ color: "grey", marginLeft: "15px" }}>{con.text}</label>):( <label style={{ color: "grey", marginLeft: "15px" }}><del>{con.text}</del></label>)}
    </div>
    </div>
  );
}

function Todo() {
  const [todo, setTodo] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo(todo);
    setTodo("");
  };
  const [count, setCount] = React.useState([]);
  const [text, setText] = React.useState("");

  const addTodo = (text) => {
    setCount([...count, { text }]);
  };

  return (
    <div className="todo-main-section">
      <h1 className="header-text">TODO</h1>
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
          <AddTodo con={con} index={index} />
        ))}
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
