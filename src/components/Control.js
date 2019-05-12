import React from "react";
import "./Control.css";

const control = props => {
  return (
    <div>
      <button onClick={props.clicked}>Get users</button>
    </div>
  );
};
export default control;
