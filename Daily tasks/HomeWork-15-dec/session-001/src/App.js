import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
// import Component1 from './components/Component1';
// import Compoent2 from './components/Compoent2';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import Pokemons from './components/Pokemons';

export const MoneyContext = createContext()

function App() {
  // const [money, setMoney] = useState(0)
   // joint account
  //const AnotherContext = createContext()
  return (
    <div>
      {/* <MoneyContext.Provider value={[money, setMoney]} > */}
      {/* // gpay account =< value => upi */}
        {/* <Component1 /> */}
      {/* </MoneyContext.Provider> */}
      {/* //<AnotherContext> */}
        {/* // <Compoent2 /> */}
      {/* </AnotherContext> */}
      {/* <CounterOne />
      <CounterTwo /> */}
      {/* <button onClick={()=>setMoney(money + 1)}>Button from Provider </button> */}
      <Pokemons />
    </div>
  );
}

export default App;

// setCount(0+1) count 0 x = 0
// setCount(0+1) count 0 x = 1
// setCount(0+1)
// setCount(0+1)
// setCount(0+1) 

// updation

