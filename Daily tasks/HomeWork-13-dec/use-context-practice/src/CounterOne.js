import React from 'react'
import { useCounter } from './useCounter';
function CounterOne() {
    const [count,increment]=useCounter(100);
  return (
    <div>
        <h1>counter : {count}</h1>
        <button onClick={()=>increment(1)}>Add Me</button>
    </div>
  )
}

export default CounterOne