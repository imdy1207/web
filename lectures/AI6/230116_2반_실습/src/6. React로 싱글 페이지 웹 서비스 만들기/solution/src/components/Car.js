import React, { useEffect } from 'react'
import "../index.css"

function Car(){    
    useEffect(() => {
        document.title = "자동차 페이지"
    })


    return(
      <div className="box box-car">
        <h2> 자동차 관련 페이지입니다. </h2>
      </div>
    );
}

export default Car