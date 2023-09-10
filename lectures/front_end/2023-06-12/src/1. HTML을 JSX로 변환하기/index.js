import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//element에 코드를 입력해주세요.  
const element = (
    <div>
    <h2>
        코더랜드에 오신것을 환영합니다:)
    </h2>
    <h2>
        즐거운 React! 함께 공부해봐요~
    </h2>
    </div>
);


ReactDOM.render(element, document.getElementById('root'));

serviceWorker.unregister();