import React, { useState } from "react";
import Form from "./components/Form";
import TodoListTemplate from "./components/TodoListTemplate";
import TodoItemList from "./components/TodoItemList";

function App() {
  let [state, setState] = useState({
    input: "",
    todos: [
      { id: 1, text: "점심약속", checked: false },
      { id: 2, text: "운동", checked: true },
      { id: 3, text: "낮잠", checked: false },
      { id: 4, text: "리액트 실시간 강의", checked: false },
    ],
  });
  function handleChange(e) {
    setState((state) => ({
      ...state,
      input: e.target.value, // input의 다음 바뀔 값
    }));
  }

  function handleCreate() {
    const { input, todos } = state;
    setState({
      input: "", // 인풋 비움
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: state.todos.length + 1,
        text: input,
        checked: false,
      }),
    });
  }

  function handleKeyPress(e) {
    // 클릭된 키가 Enter 일 경우 handleCreate 호출
    if (e.key === "Enter") {
      handleCreate();
    }
  }

  function handleToggle(id) {
    const { input, todos } = state;

    const index = todos.findIndex((todo) => todo.id === id);
    const selected = todos[index];

    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked,
    };

    setState({ input: input, todos: nextTodos });
  }

  function handleRemove(id) {
    const { todos } = state;
    let nextTodos = todos.filter((todo) => todo.id !== id);

    setState({ ...state, todos: nextTodos });
  }

  return (
    <TodoListTemplate
      form={
        <Form
          value={state.input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      }
    >
      <TodoItemList
        todos={state.todos}
        onToggle={handleToggle}
        onRemove={handleRemove}
      />
    </TodoListTemplate>
  );
}

export default App;
