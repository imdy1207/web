import React from 'react';
const ArticleComp = (props) => (
  <article>
    <h1>{props.title}</h1>
    {props.desc}
  </article>
);
export default ArticleComp;
