import React, { useState } from 'react'
import List from './List';

function Form() {
    const [item, setItem] = useState('');
    const [data, setData] = useState([]);
    let update = () => {
        setData((c) => [...c, item]);
    }
  
    return (
        <div>
            <input type='text' placeholder='Enter your daily tasks' onChange={(e) => setItem(e.target.value)} />
            <button onClick={update}>Add</button>

            <List arr={data}/>
        </div>
    )
}

export default Form