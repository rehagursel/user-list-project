import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import "./NewUserForm.css";

function NewUserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: enteredName,
      age: +enteredAge,
    };

    setEnteredName("");
    setEnteredAge("");
    props.onAddItem(newUser);
  };

  return (
    <Card className="form-item">
      <form onSubmit={submitHandler}>
        <div>
          <div className="form-item_input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              required
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="form-item_input">
            <label htmlFor="userage">Age (Years)</label>
            <input
              id="userage"
              required
              type="number"
              min="1"
              step="1"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default NewUserForm;
