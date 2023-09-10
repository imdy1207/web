import React, { useEffect, useState, useCallback, useReducer } from "react";
import { Link, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { getAllOrders, placeOrder } from "./api";

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
  return (
    //문제1
    <BrowserRouter>
      <Route exact path="/">
        <OrderList />
      </Route>

      <Route path="/checkout">
        <Checkout />
      </Route>
    </BrowserRouter>
  );
}

function OrderList() {
  const [orders, setOrders] = useState(undefined);

  //문제2-1
  useEffect(() => {
    getAllOrders().then((res) => setOrders(res));
  }, []);

  return (
    <PageLayout>
      <Container>
        <Header>
          <h3>주문 내역</h3>
          {/*
          문제2-2 
            <Link id="checkout" to="/checkout">주문하러가기</Link>
          */}
          <StyledLink id="checkout" to="/checkout">주문하러가기</StyledLink>
        </Header>
      </Container>
      {/*
          문제2-3
          {Array.isArray(orders) && orders.length === 0  && <Message>주문내역이 없습니다.</Message>}
          {String(orders) === "" && <Message>주문내역이 없습니다.</Message>}
      */}
      {!orders ||
        (orders.length === 0 && <Message>주문내역이 없습니다.</Message>)}
      {orders && (
        <StyledOrderList>
          {orders.map(({ email, address, date }) => (
            <OrderItem>
              <div>이메일 - {email}</div>
              <div>주소 - {address}</div>
              <div>주문 시간 - {date}</div>
            </OrderItem>
          ))}
        </StyledOrderList>
      )}
    </PageLayout>
  );
}

// OrderList 페이지를 추가하세요.
// getAllOrders API 함수로 데이터를 보여주세요.
// Checkout 페이지로 가는 네비게이션을 추가합니다.

function Checkout() {
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
      {/*
          문제3
          {success && (
          <Link id="home"  to="/">
            목록으로 돌아가기
          </Link>
          )}
      */}
      {success && (
        <StyledLink id="home" style={{ margin: "12px 0" }} to="/">
          목록으로 돌아가기
        </StyledLink>
      )}
      
    </Container>
  );
}


const Container = styled.div`
  width: 90%;
  max-width: 90%;
`;

const PageLayout = styled.div`
  border: 5px solid #f1f3f5;
  border-radius: 4px;

  width: 350px;
  max-height: 600px;

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

const StyledLink = styled(Link)`
  display: inline-block;

  text-decoration: none;
  color: #343a40;
  background: #f1f3f5;
  padding: 12px;

  :hover {
    background: #e9ecef;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Image = styled.img`
  width: 100px;
`;

const OrderItem = styled.li`
  list-style: none;

  & + & {
    padding-top: 4px;
    margin-top: 4px;
    border-top: 3px solid #f1f3f5;
  }
`;

const StyledOrderList = styled.ul`
  padding: 0;
`;