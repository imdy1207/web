import React, { Component } from "react";
import "./Form.css";

function TodoItem(props) {
  const { text, checked, id, onToggle, onRemove } = props;

  return (
    <div className="todo-item" onClick={() => onToggle(id)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && "checked"}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">&#x2713;</div>}
    </div>
  );
}

export default TodoItem;
