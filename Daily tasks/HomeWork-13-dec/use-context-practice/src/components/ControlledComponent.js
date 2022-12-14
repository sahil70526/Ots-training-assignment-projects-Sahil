import React, { useState } from "react";

const ControlledComponent = () => {
  const [myState, setMyState] = useState("Akshay");

  return (
    <div>
      <input onChange={(e) => setMyState(e.target.value)} />
      <br />
      Value of state is : {myState}
    </div>
    /*
        You have to add a logic to call a API on the basis of searched term
        get("www.openapi.com/${myState}")
    */
  );
};

export default ControlledComponent;
