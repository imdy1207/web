import React, { createContext, useReducer } from "react";
import ContainerA from "./components/A";
import "./App.css";

export const MyContext = createContext(null);

/*
  다음 초기값을 완성해주세요.
*/
const initial = {
    top: "apple",
    middle: "banana",
    bottom: "coconut"
};

/*
  상태 변경 설명서라 할 수 있는 reducer를 지시사항에 맞게 작성해주세요.
*/
function reducer(state, action) {
  switch (action.type) {
    case "top-middle-change":
      return { ...state, top: state.middle, middle: state.top };
    case "middle-bottom-change":
      return { ...state, middle: state.bottom, bottom: state.middle };
    case "top-bottom-change":
      return { ...state, top: state.bottom, bottom: state.top };
    case "top-update":
      return { ...state, top: action.payload };
    case "middle-update":
      return { ...state, middle: action.payload };
    case "bottom-update":
      return { ...state, bottom: action.payload };
    default:
      throw new Error();
  }
}

export default function App() {
  // useReducer를 사용해 state와 dispatch를 value 넣어서 전달해주세요.
  const [state, dispatch] = useReducer(reducer, initial);
  const value = { state, dispatch };

  return (
    <div className="layout">
      <MyContext.Provider value={value}>
        <ContainerA />
      </MyContext.Provider>
    </div>
  );
}
