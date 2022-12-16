import React, { useContext } from 'react'
import { MoneyContext } from '../App'
import Compoent1Child from './Compoent1Child'

const Component1 = () => {

    const [money, setMoney] = useContext(MoneyContext) // atm machine
    console.log('From child ', money)
  return (
    <div>
        <Compoent1Child />
        <button onClick={()=>{setMoney(money+1)}}>Button from Child</button>
    </div>
  )
}

export default Component1