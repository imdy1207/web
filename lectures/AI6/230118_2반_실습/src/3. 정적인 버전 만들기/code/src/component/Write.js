import React from 'react';
function Write(props){
    console.log('Write');
    return (
        <article>
            <form action="/create_process" method="POST" onSubmit={function(e){
                props.onSubmit({
                    title:e.target.title.value,
                    desc:e.target.desc.value
                });
                e.preventDefault();
            }}>
                <p>
                    <input type="text" name="title" placeholder="제목"></input>
                </p>
                <p>
                    <input type="text" name="desc" placeholder="본문"></input>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    );
}
export default Write;
