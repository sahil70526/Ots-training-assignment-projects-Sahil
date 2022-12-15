import React, { useState } from 'react'

function Arg() {
  const [count,setCount]=useState(0)
  return (
    <div>
        {count}
    </div>
  )
}

export default Arg