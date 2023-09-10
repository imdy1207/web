import React from "react";
// react-router-dom 라이브러리에서 필요한 컴포넌트 가져오기
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css"
import Home from "./components/Home.js"
import Car from "./components/Car.js"
// Coffee, Youtube 컴포넌트를 components 폴더에서 가져오기
import Coffee from "./components/Coffee.js"
import Youtube from "./components/Youtube.js"


// 한글 부분을 영어로 바꾸고, li태그 2개 추가하기
function App() {
  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
              <Link to="/coffee">커피</Link>
            <li>
              <Link to="/car">자동차</Link>
            </li>
              <Link to="/youtube">유튜브</Link>
          </ul>
        </nav>
      </div>
      
      <div className="box-container">
        <Switch>
          <Route path="/youtube">
            <Youtube />
          </Route>
          <Route path="/coffee">
            <Coffee />
          </Route>
          <Route path="/car">
            <Car />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App