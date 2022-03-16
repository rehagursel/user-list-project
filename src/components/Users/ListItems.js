import React from "react";

import EachUser from "./EachUser";
import Card from "../UI/Card";

import "./ListItems.css";

const ListItems = (props) => {
  if (props.usersArr.length === 0) {
    return "";
  }
  return (
    <Card>
      {props.usersArr.map((item) => ( 
        <div className="list-items" key={item.id}>
          <EachUser name={item.name} age={item.age} />
        </div>
      ))}
    </Card>
  );
};

export default ListItems;
  