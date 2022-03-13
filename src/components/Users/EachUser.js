import React from "react";

import "./EachUser.css";

const EachUser = (props) => {
  return (
    <li className="item">
      {props.name[0].toUpperCase()}{props.name.substring(1)} {`(${props.age} years old)`}
    </li>
  );
};

export default EachUser;
