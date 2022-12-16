import React from 'react'
import { useCounter } from '../custom-hooks/counter-hook'

const CounterTwo = () => {
    const [count, increment, decrement] = useCounter(200)
  return (<>
    <div>Counter Two: {count}</div>
    <button onClick={()=>{increment(2)}}>Counter Two Button</button>
    </>
  )
}

export default CounterTwo