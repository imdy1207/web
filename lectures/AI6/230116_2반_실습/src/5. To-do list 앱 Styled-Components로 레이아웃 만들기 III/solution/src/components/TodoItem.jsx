import React from "react";
import styled from "styled-components";

const TodoItemStyled = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;
  &:hover {
    background: #cef1ee;
  }
  &:hover .remove {
    opacity: 1;
  }
  & + & {
    border-top: 1px solid #cef1ee;
  }
`;

const RemoveStyled = styled.div`
  margin-right: 1rem;
  color: #e64980;
  font-weight: 600;
  opacity: 0;
`;

const TodoTextStyled = styled.div`
  flex: 1;
  word-break: break-all;
  text-decoration: ${(props) => (props.checked ? "line-through" : "none")};
  color: ${(props) => (props.checked ? "#4c445f" : "#000")};
`;

const CheckMark = styled.div`
  font-size: 1.5rem;
  line-height: 1rem;
  margin-left: 1rem;
  color: #cef1ee;
  font-weight: 800;
`;

function TodoItem(props) {
  const { text, checked, id, onToggle, onRemove } = props;

  return (
    <TodoItemStyled onClick={() => onToggle(id)}>
      <RemoveStyled
        className="remove"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(id);
        }}
      >
        &times;
      </RemoveStyled>
      <TodoTextStyled checked={checked}>
        <div>{text}</div>
      </TodoTextStyled>
      {checked && <CheckMark>&#x2713;</CheckMark>}
    </TodoItemStyled>
  );
}

export default TodoItem;