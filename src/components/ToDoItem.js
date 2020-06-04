import React from "react";
import "../style.css";

function ToDoItems(props) {
  console.log(props);
  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.status} />
      <span> {props.text}</span>
    </div>
  );
}

export default ToDoItems;
