import React, { useEffect } from 'react'
import "../index.css"

function Coffee(){    
    useEffect(() => {
        document.title = "커피 페이지"
    })


    return(
      <div className="box box-car">
        <h2> 커피 관련 페이지입니다. </h2>
      </div>
    );
}

export default Coffee