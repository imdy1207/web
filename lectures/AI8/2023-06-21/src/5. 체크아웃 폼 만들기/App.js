import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { placeOrder } from "./api";

const initialState = {
  success: "",
  error: "",
  loading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "request": {
      return {
        ...state,
        success: "",
        error: "",
        loading: true,
      };
    }

    case "success": {
      return {
        ...state,
        loading: false,
        success: action.payload.message,
      };
    }

    case "error": {
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    }

    default:
      return state;
  }
};

const validateForm = (email, address) => {
  if (email.length === 0) {
    return "email을 입력해주세요.";
  } else if (address.length === 0) {
    return "address를 입력해주세요.";
  }
  return "";
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, success, loading } = state;

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formError = validateForm(email, address);
    setFormError(formError);
    if (formError) return;

    dispatch({ type: "request" });

    placeOrder({ email, address })
      .then(() =>
        dispatch({
          type: "success",
          payload: { message: "주문에 성공하였습니다. 내일 만나요!" },
        })
      )
      .catch((e) =>
        dispatch({ type: "error", payload: { message: e.message } })
      );
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            autoComplete="off"
          />
        </FormGroup>

        <Button disabled={loading}>주문하기</Button>
      </form>

      <Message>{formError || error || success}</Message>
    </Container>
  );
}

const Container = styled.div`
  border: 5px solid #f1f3f5;
  border-radius: 4px;

  width: 350px;
  height: 350px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
`;

const FormGroup = styled.div`
  width: 100%;
  & + & {
    margin-top: 4px;
  }
`;

const Button = styled.button`
  margin-top: 12px;
  width: 100%;
  padding: 4px;
`;

const Message = styled.div`
  word-break: break-all;
  font-size: 14px;
  margin-top: 8px;
`;