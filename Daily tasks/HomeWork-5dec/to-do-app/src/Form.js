import React from 'react'
const item = '';
const result=[];
export default function Form() {
    function getFormData(e) {
        e.preventDefault();
    
    }
    
    return (
        <div>
            <form onSubmit={getFormData}>
                <input type='text' onChange={(e) => {item = e.target.value;
                console.log(item);} } ></input>
                <button type='submit' onClick={()=>{
                      result.push(item );
                      console.log(result);
                }}>Add</button>
            </form>
         <ul>
            <li>{item}</li>
         </ul>
        </div>
    )
}
