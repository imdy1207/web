import React from 'react';
// Profile 함수 import

import { Profile } from "./components/Profile.js"


function App() {
  const title = "사용자 프로파일"   
  return (
    <div>
      <h1>{ title }</h1>
      // Profile 함수 컴포넌트 삽입
      <Profile />
    </div>
  );
}

export default App;