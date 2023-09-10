import React  from 'react';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      //해설14 : todo.hasCompleted 값이 true일 경우 줄긋기, false일 경우 아무런 설정 없음
      style={{ textDecoration: todo.hasCompleted ? "line-through" : "none" }}
      className="todo"
    >
      {/*해설15 : todo의 내용 출력*/}
      {todo.text}
      <div>
        {/*해설16 : complete 버튼을 클릭시 complete 함수 실행*/}
        <button className="btn" onClick={() => completeTodo(index)}>
          <a href="#!">Complete</a>
        </button>
        {/*해설17 : remove 버튼을 클릭시 removeTodo 함수 실행*/}
        <button className="btn btn-remove" onClick={() => removeTodo(index)}>
          <a href="#!">Remove</a>
        </button>
      </div>
    </div>
  );
}

export default Todo;
