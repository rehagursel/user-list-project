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

  return (
    <React.Fragment>                                    
      <NewUserForm onAddItem={addItemsHandler} />
      <ListItems usersArr={updatedUserList} />
    </React.Fragment>
  );
}

export default App;
