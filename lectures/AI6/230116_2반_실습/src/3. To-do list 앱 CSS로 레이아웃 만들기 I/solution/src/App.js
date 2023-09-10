import { useState } from "react";
import React from 'react';
import Todo from "./todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Upload the Vlog by tonight",
      hasCompleted: false,
    },

    {
      text: "Read Book from page 51~220",
      hasCompleted: false,
    },

    {
      text: "Finish Season 3 of La Casa De Papel",
      hasCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>TO DO LIST</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
