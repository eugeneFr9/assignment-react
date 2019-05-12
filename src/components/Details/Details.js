import React from "react";
const details = props => {
  return (
    <div>
      <img src={props.details.photo} alt={props.details.surname} />
      <p>
        {props.details.name} {props.details.surname}
      </p>
      <p>Email: {props.details.email}</p>
      <p>Gender: {props.details.gender}</p>
      <p>Age: {props.details.age}</p>
      <p>Country of origin {props.details.region}</p>
    </div>
  );
};

export default details;
