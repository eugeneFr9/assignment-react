import React from "react";
import Name from "./Name/Name";
const names = props => {
  return props.names.map((el, index) => <Name key={el.index} info={el} />);
};
export default names;
