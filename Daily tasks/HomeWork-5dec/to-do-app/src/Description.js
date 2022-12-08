import React from "react";

function Description({ arr1 }) {
  return (
    <div
      style={{
        margin: "10px",
        border: "0.5px solid #F8FFDB",
        width: "400px",
        height: "400px",
        borderRadius: "10px",
        fontSize: "larger",
        padding:'20px'
      }}
    >
      <h2 style={{ textAlign: "center" }}>The description of the food....</h2>
      <div>Food-Name :- {arr1.foodName}</div>
      <div> Chef-Name :- {arr1.chief}</div>
      <div>Description :- {arr1.description}</div>
    </div>
  );
}

export default Description;
