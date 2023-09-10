import { useState } from "react";
import React  from 'react';
//Todo를 입력하는 컴포넌트
function TodoForm({ addTodo }) {
  //해설7 : value(state), setValue(setState) 설정
  const [value, setValue] = useState("");

  //해설8 : form 요소의 onSubmit 이벤트의 핸들러로 사용
  const handleSubmit = (e) => {
    e.preventDefault();
    //해설9 : value 가 빈 값 일경우 return(value는 입력값) 
    if (!value) return;

    //해설11 : addTodo 함수를 통해 value(입력한 값)를 Todo 리스트에 추가
    addTodo(value);
    //해설12 : value를 빈값으로 초기화
    setValue("");
    // -> App.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        autoFocus
        value={value}
        placeholder="Enter todo item"
        //해설10 : 입력부분의 값의 변화가 발생했을 경우 setValue를 통해 value를 입력한 값으로 설정
        //(e.targt.value와 value는 다른 값)
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
