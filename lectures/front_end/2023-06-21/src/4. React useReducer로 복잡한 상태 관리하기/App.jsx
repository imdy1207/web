import React, { createContext, useReducer } from "react";
import ContainerA from "./components/A";
import "./App.css";

/*
  Context 객체 생성
  다른 컴포넌트에서 Context를 참조할 수 있도록 export 하기
*/
export const MyContext = createContext(null);

/*
  상태 초기값
*/
const initial = {
  top: "apple",
  middle: "banana",
  bottom: "coconut",
};

/*
  상태 변경 설명서
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
  const [state, dispatch] = useReducer(reducer, initial);
  const value = { state, dispatch };

  return (
    <div className="layout">
      {/* 
        만든 State를 Provider의 현재값으로 설정하기 위해 Props 전달
      */}
      <MyContext.Provider value={value}>
        <ContainerA />
      </MyContext.Provider>
    </div>
  );
}