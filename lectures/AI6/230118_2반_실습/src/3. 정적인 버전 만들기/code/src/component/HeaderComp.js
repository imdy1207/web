import React from 'react';
const HeaderComp = (props) => (
    <header>
      <h1><a href="/" onClick={function(e){
        props.onClick()
        e.preventDefault();
      }}>{props.title}</a></h1>
    </header>
  );
  
export default HeaderComp;
