import React from "react";
import Todo from "./Todo";
const Todos = ({ todos, markComplete, trashTask }) => {
  return (
    <div id="todo-container">
      {todos.map((todo, index, todos) => (
        <Todo
          key={index} 
          index={index} 
          todo_id={`todo-list-${index}`}
          todo={todo}
          markComplete={markComplete}
          trashTask={trashTask}
        />
      ))}
    </div>
  );
};

export default Todos;
