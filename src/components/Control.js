import React from "react";
import "./Control.css";

const control = props => {
  return (
    <div style={{ margin: "auto", border: "1px solid black", height: "50px" }}>
      <button onClick={props.clicked}>Get users</button>
    </div>
  );
};
export default control;
