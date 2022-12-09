import React from "react";

function Description({ arr1 }) {
  return (
    <div
      style={{
        margin: "10px",
        border: "0.5px solid  #F2E5E5",
        height: "600px",
        borderRadius: "10px",
        fontSize: "larger",
        padding:'20px'
      }}
    >
      <h2 style={{ textAlign: "center" }}>The description of the food....</h2>
      <div>Food-Name :- {arr1.foodName}</div>
      <div> Chef-Name :- {arr1.chef}</div>
      <div>Description :- {arr1.description}</div>
    </div>
  );
}

export default Description;
