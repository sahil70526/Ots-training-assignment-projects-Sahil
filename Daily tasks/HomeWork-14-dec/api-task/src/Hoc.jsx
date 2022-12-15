import React, { useState } from 'react'


function Hoc(Arg) {
    
    const newComponent=()=> {
      const [count,setCount]=useState(5);
      return(
        <div>
            <div>I am from HOC</div>
            <Arg org={count}/>
        </div>
      )
    }
    return newComponent;

}

export default Hoc