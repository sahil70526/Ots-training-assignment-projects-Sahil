import { useState } from 'react'

export const useCounter=(value)=> {
    const[count,setCount]=useState(value);
    const increment=(value)=>{
        if(value){
         setCount(count+value);
        }else{
         setCount(count+1);
        }
    }
  return [count,increment];
}
