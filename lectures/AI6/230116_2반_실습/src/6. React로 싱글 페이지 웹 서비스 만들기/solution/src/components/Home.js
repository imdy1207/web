import React, { useEffect } from 'react'
import "../index.css"

function Home(){    
    useEffect(() => {
        document.title = "기본 페이지"
    })
    
    return(
      <div className="box box-home">
        <h2> 기본 페이지입니다. </h2>
      </div>
    );
}

export default Home