import React from "react";
const detail = props => {
  return (
    <div>
      <img src={props.user.photo} alt={props.user.surname} />
      <p>
        {props.user.name} {props.user.surname}
      </p>
      <p>Email: {props.user.email}</p>
      <p>Gender: {props.user.gender}</p>
      <p>Age: {props.user.age}</p>
      <p>Country of origin {props.user.region}</p>
    </div>
  );
};

export default detail;
