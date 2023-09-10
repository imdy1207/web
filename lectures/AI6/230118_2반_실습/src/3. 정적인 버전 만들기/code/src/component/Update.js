import React from 'react';
import { useState } from "react";

function Update(props){
    var [data, setData] = useState({title:props.data.title, desc:props.data.desc});
    console.log(data);
    return (
        <article>
            <form action="/create_process" method="POST" onSubmit={function(e){
                props.onSubmit({
                    id:props.data.id,
                    title:e.target.title.value,
                    desc:e.target.desc.value
                });
                e.preventDefault();
            }}>
                <p>
                    <input type="text" name="title" placeholder="제목" onChange={(e)=>setData({...data, title:e.target.value})} value={data.title}></input>
                </p>
                <p>
                    <input type="text" name="desc" placeholder="본문" onChange={(e)=>setData({...data, desc:e.target.value})} value={data.desc}></input>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    );
}
export default Update;
