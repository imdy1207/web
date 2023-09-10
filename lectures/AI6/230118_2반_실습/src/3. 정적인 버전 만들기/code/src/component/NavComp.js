import React from 'react';
const NavComp = (props) => {
  console.log('nav');
    var tagList = [];
    for(var i=0; i<props.list.length; i++){
      var e = props.list[i];
      tagList.push(<li key={e.id}><a href={'/'+e.id} data-id={e.id} title={e.desc} onClick={function(e){
        props.onChange(Number(e.target.dataset.id));
        e.preventDefault();
      }}>{e.title}</a></li>);
    }
    return <ul>{tagList}</ul>;
  }

  export default NavComp;
