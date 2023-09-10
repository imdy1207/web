import React, { useReducer, useState } from "react";
import styled from "styled-components";
import { placeOrder } from "./api";

const initialState = {
  success: "", // API 요청 성공시 성공 메시지를 저장합니다.
  error: "", // API 요청 실패시 에러 메시지를 저장합니다.
  loading: false, // API 로딩 상태를 저장합니다.
};

// request -  success, error, loading 상태를 초기화합니다.
// success - success message를 저장합니다.
// error - error message를 저장합니다.
const reducer = (state, action) => {
    if (action.type == "request") {
        return {
            ...state,
            success : "",
            error : "",
            loading : true
        }
    }
    else if (action.type == "success") {
        return {
            ...state,
            success : action.payload.message,
            error : "",
            loading : false
        }
    }
    else if (action.type == "error") {
        return {
            ...state,
            success : "",
            error : action.payload.message,
            loading : false
        }
    }

    return;
    /*
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
  */
};

// 이 함수를 활용하여 폼의 상태를 체크하세요.
const validateForm = (email, address) => {
  // 폼의 데이터를 체크해주세요.
  // 성공시 빈 문자열을 리턴하고, 에러가 있을 시 에러 메시지를 리턴합니다.
  if (email === "")
    return "email을 입력해주세요.";
  else if (address === "")
    return "address를 입력해주세요.";
  /*
  if (email.length === 0) {
    return "email을 입력해주세요.";
  } else if (address.length === 0) {
    return "address를 입력해주세요.";
  }
  */
  return "";
};

export default function Checkout() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { error, success, loading } = state;

  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 먼저 formError를 체크하세요.
    // 에러가 있을 경우, 요청을 보내지 않도록 합니다.
    const formError = validateForm(email, address);
    setFormError(formError);
    if (formError) return;

    dispatch({ type: "request" });

    // placeOrder API를 이용해 요청을 보내세요.
    // API 요청, 성공, 실패의 경우 dispatch를 이용해 상태를 처리하세요.
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

// 추가 스타일링을 추가해도 좋습니다.
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
