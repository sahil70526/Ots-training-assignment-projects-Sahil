import { useState } from "react";

export default function List({ arr, details ,deleteIndex,updateteIndex}) {
  // const[clicked,setClicked]=useState(false)
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F3CCFF",
        height: "250px",
        fontSize: "larger",
        borderRadius: "10px",
        color:'green'
      }}
    >
      <h2 style={{ textAlign: "center" }}>Food Names.. </h2>
      <ul>
        {arr.map((item,index) => (
          <li
            key={item}
            onClick={() => {
              details(item);
            }}
          >
            {item.foodName}
            <span><button onClick={()=>updateteIndex(index)}>Edit</button><button onClick={()=>deleteIndex(index)}>delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
