//1. useState를 react에서 import하세요.

import React, { useState } from 'react';
//해설1 : useState를 사용하기위해 모듈을 import 해온다.
import Todo from "./todo";
import TodoForm from "./TodoForm";

function App() {

  //2. useState가 반환하는 첫 번째 인자인 state와 두 번째 인자인 setState를 todos, setTodos로 변경하세요.
  //해설2 : state의 이름을 todo로 정의
  const [todos, setTodos] = useState([
 //3. useState의 배열에 초기화면에 display할 원소를 작성하세요.이렇게하면 useState 는 배열로 초기화하는데, 개별 원소는 text(사용자가 입력한 todo)와 hasCompleted(완료여부)로 구성됩니다.
        //해설3 : 초기값을 문제에서 제시된 값으로 설정
        {
            text: "Upload the video by tonight",
            hasCompleted: false,
        }
  ]);

  //4. addTodo()와 completeTodo() 함수를 작성하세요.이때 사용자가 입력한 text 데이터를 array(newTodos)로 받아 text로 전달하세요.
  const addTodo = (text) => {
      //해설4 : setTodos(setState)를 통해 todos(state)를 사용자가 입력한 text를 기존 todos에 추가한 값으로 설정
      //...은 전개 구문으로 배열의 값을 가져와 펼친다
      setTodos([...todos, { text }]);
  };
  
  const completeTodo = (index) => {
    //해설5 : 사용자가 선택한 게시글의 index를 통해 해당 게시물의 hasCompleted값을 반전
    let temp = [...todos];
    temp[index].hasCompleted = !temp[index].hasCompleted;
    setTodos(temp);
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
        {/*
        해설6: Todo를 입력하는 컴포넌트
        TodoForm에 addTodo 함수를 props로 전달.
        -> TodoForm.js
        */}
        <TodoForm addTodo={addTodo} />
        {/*
        해설13 : Todo 리스트를 출력하는 컴포넌트
        todos에 있는 요소들을 map 함수를 통해 요소들의 컴포넌트를 배열로 만들어서 반환
        props로 index, todo, completeTodo(), removeTodo()를 전달
        -> Todo
        */}
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
