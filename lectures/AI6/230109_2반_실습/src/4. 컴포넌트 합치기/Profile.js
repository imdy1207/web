import React from 'react';

// Comment 컴포넌트 import
import { Comment } from './Comment.js';

// UserInfo 컴포넌트 import
import { UserInfo } from './UserInfo.js';


import "../index.css"


function Profile() {
  const user1 = {
        name: '엘리스 토끼',
        age: '12'
      }
  const text1 = 'React는 재밌다!!'  
    
  return (
    <div className="profile">
      {/* // Comment 컴포넌트를 삽입하며, text props로 text1 를 전달함.*/}
      <Comment comment text = { text1 }/>
      
     {/* // UserInfo 컴포넌트를 삽입하며, user props로 user1 를 전달함. */}
      <UserInfo user = { user1 }/>
      
    </div>
  );
}


export { Profile };
