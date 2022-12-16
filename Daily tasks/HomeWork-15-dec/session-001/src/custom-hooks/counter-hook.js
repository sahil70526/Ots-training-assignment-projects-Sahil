import { useState } from "react"

export const useCounter = (defaultVal) =>{
    const [count, setCount] = useState(defaultVal)
    const increment = (val) => {
        if(val){
            setCount(count + val)
        }else{
            setCount(count+1)
        }
    }
    const decrement = (val) => {
        if(val){
            setCount(count - val)
        }else{
            setCount(count-1)
        }
    }

    return [count, increment, decrement]
}