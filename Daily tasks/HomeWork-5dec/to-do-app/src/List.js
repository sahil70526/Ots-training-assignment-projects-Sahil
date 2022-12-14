import { useState } from "react";

export default function List({ arr, details,deleteData}) {
  const [clicked, setClicked] = useState(true);
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F2E5E5",
        height: "250px",
        fontSize: "larger",
        borderRadius: "10px",
        color: 'green'
      }}
    >
      <h2 style={{ textAlign: "center" }}>Food Names.... </h2>
      <ul>
        {arr.map((item,index) => (
          <li
            key={i}
            onClick={() => {
              setClicked(false)
              details(i, clicked);
            }}
          >
            {i.foodName}
            <span><button onClick={()=>{  setClicked(false)
              details(i, clicked);}}>Update</button><button onClick={()=>{deleteData(i.id)}}>Delete</button></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
