import React from 'react';

function MyForm(props) {
  return (
    <input onChange={props.onChange}/>
  );
}

export default MyForm;
