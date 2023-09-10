import React, { useEffect } from 'react'
import "../index.css"

function Youtube(){    
    useEffect(() => {
        document.title = "유튜브 페이지"
    })


    return(
      <div className="box box-car">
        <h2> 유튜브 관련 페이지입니다. </h2>
      </div>
    );
}

export default Youtube