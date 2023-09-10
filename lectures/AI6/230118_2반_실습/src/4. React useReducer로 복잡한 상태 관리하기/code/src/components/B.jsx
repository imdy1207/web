import ContainerC from "./C";
import ContainerD from "./D";
import ContainerE from "./E";
import { useContext, useRef } from "react";
import { MyContext } from "../App";

export default function ContainerB() {
  // Context로 부터 dispatch를 받습니다.
  const { dispatch } = useContext(MyContext);
  const inputRef = useRef();

  return (
    <div>
      <div className="container b">
        <div className="title">Component B</div>
        <div className="content">
          <ContainerC />
          <ContainerD />
          <ContainerE />
          <div className="button-group">
            <button
              onClick={() => {
                // 올바른 액션 타입을 지정해주세요.
                dispatch({ type: "top-middle-change" });
              }}
            >
              Top Middle Change
            </button>
            <button
              onClick={() => {
                // 올바른 액션 타입을 지정해주세요.
                dispatch({ type: "middle-bottom-change" });
              }}
            >
              Middle Bottom Change
            </button>
            <button
              onClick={() => {
                // 올바른 액션 타입을 지정해주세요.
                dispatch({ type: "top-bottom-change" });
              }}
            >
              Top Bottom Change
            </button>
          </div>
          <div className="button-group">
            <input type="text" data-testid="input" ref={inputRef} />
            <button
              onClick={() => {
                // 올바른 액션 타입과 페이로드를 전달해주세요.
                dispatch({
                  type: "top-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Top Update
            </button>
            <button
              onClick={() => {
              // 올바른 액션 타입과 페이로드를 전달해주세요.
                dispatch({
                  type: "middle-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Middle Update
            </button>
            <button
              onClick={() => {
              // 올바른 액션 타입과 페이로드를 전달해주세요.
                dispatch({
                  type: "bottom-update",
                  payload: inputRef.current.value,
                });
              }}
            >
              Bottom Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
