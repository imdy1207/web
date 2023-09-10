import React from "react";
import styled from "styled-components";

const TodoListTemplateStyled = styled.main`
  background: white;
  width: 512px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 4rem auto 0;
`;
const TitleStyled = styled.div`
  padding: 2rem;
  font-family: "Malgun Gothic";
  font-size: 2.7rem;
  text-align: center;
  font-weight: normal;
  background: #5426cc;
  color: white;
`;
const FormWrapperStyled = styled.section`
  padding: 1rem;
  border-bottom: 1px solid #5426cc;
`;
const TodosWrapperStyled = styled.section`
  min-height: 5rem;
`;

const TodoListTemplate = ({ form, children }) => {
  return (
    <TodoListTemplateStyled>
      <TitleStyled>Things to do</TitleStyled>
      <FormWrapperStyled>{form}</FormWrapperStyled>
      <TodosWrapperStyled>{children}</TodosWrapperStyled>
    </TodoListTemplateStyled>
  );
};

export default TodoListTemplate;