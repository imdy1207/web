import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//정의된 이름
const name = "Sara"

//함수명이 Welcome인 컴포넌트를 작성합니다.
function Welcome() {
  return <h2>Welcome, {name}</h2>;
}

//컴포넌트를 호출합니다.
const element = <Welcome/>;
ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();