import React, { useContext } from 'react'
import { MoneyContext } from '../App'

const Compoent1Child = () => {
    const [money, setMoney] = useContext(MoneyContext)
    console.log('From child 1', money)
  return (
    <div>Child 1
        <button onClick={()=>{setMoney(money+1)}}>Button from Child</button>
    </div>
  )
}

export default Compoent1Child