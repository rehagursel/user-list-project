import React, { useState } from "react";

import Card from "../UI/Card";

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
      <form  onSubmit={submitHandler}>
        <div>
          <div className="form-item_input">
            <label>Username</label>
            <input
              required
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="form-item_input">
            <label>Age (Years)</label>
            <input
              required
              type="number"
              min="1"
              step="1"
              value={enteredAge}
              onChange={ageChangeHandler}
            />
          </div>
        </div>
        <div className="form-item_submit">
          <button type="submit">Add User</button>
        </div>
      </form>
    </Card>
  );
}

export default NewUserForm;
