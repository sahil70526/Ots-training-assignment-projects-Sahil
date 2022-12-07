import React, { useState } from 'react'
import List from './List';
import './App.css';

function Form() {
    const [item, setItem] = useState('');
    const [data, setData] = useState([]);
    let update = () => {
        setData((c) => [...c, item]);
        setItem('');
    }
  
    return (
        <div className='App-header'>
            <div className='main'>
            <input className='search' type='text' placeholder='Enter your daily tasks' value={item} onChange={(e) => setItem(e.target.value)} />
            <button className='btn' onClick={update}>Add</button>
            </div>

            <List arr={data}/>
        </div>

    )
}

export default Form