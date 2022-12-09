import React from "react";

function PersonComponent(props) {
  return (
    <div style={{ margin: '20px' }}>
      Name: {props.firstName} {props.lastName}
      <br />
      Age: {props.age}
      <br />
      Hometown: {props.hometown}
    </div>
  );
}

export default PersonComponent;
