import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
const Welcome = (name) => {
    const element = <h2>Welcome, {name}!</h2>; 
    ReactDOM.render(element, document.getElementById('root'));
}

Welcome("Sara");
*/

const name = "Sara";

//함수 컴포넌트 작성
function Welcome() {
  return <h1>Hello, {name}!</h1>;
}

//컴포넌트 호출
const element = Welcome();

//렌더링
ReactDOM.render(element, document.getElementById('root'));