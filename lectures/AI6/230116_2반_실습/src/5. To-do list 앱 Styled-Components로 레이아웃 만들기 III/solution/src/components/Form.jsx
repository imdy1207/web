import React from "react";
import styled from "styled-components";

const FormStyled = styled.div`
  display: flex;
  & input {
    flex: 1;
    font-size: 1.25rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #c5f6fa;
  }
`;

const CreateButton = styled.div`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background: 3px solid #5426cc;
  border-radius: 3px;
  color: #cef1ee;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #3bc9db;
  }
`;

const Form = ({ value, onChange, onCreate, onKeyPress }) => {
  return (
    <FormStyled>
      <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
      <CreateButton onClick={onCreate}>추가</CreateButton>
    </FormStyled>
  );
};

export default Form;