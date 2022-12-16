import React from 'react'
import { useCounter } from '../custom-hooks/counter-hook'

const CounterOne = () => {
   const [count, increment, decrement] = useCounter(100)
  return (<>
    <div>Counter One: {count}</div>
    <button onClick={()=>{increment(1)}}>Counter One Button</button>
    </>
  )
}

export default CounterOne