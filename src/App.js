import React, { useState } from "react";

import NewUserForm from "./components/UserForm/NewUserForm";
import ListItems from "./components/Users/ListItems";



const usersList = [];

function App() {
  const [updatedUserList, setUpdatedUserList] = useState(usersList);

  const addItemsHandler = (newItem) => {
    setUpdatedUserList((prevItems) => {
      return [newItem, ...prevItems];
    });
  };

  console.log(updatedUserList)

  return (
    <div className="container">
      <NewUserForm onAddItem={addItemsHandler} />
      <ListItems usersArr={updatedUserList} />
    </div>
  );
}

export default App;
