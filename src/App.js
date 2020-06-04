import React from "react";
import ToDoItem from "./components/ToDoItem";
import todoItems from "./todoItems";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoItems,
    };
  }
  render() {
    // console.log(todoList);
    const todoList = this.state.todos.map((todo) => {
      return (
        <ToDoItem key={todo.id} text={todo.text} status={todo.completed} />
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}

export default App;
