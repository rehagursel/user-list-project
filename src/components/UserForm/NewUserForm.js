import React, { useState } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

import "./NewUserForm.css";

function NewUserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Username and Age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Age",
      });
      return;
    }

    const newUser = {
      name: enteredName,
      age: +enteredAge,
      id: Math.random().toString(),
    };

    props.onAddItem(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
      <Card className="form-item">
        <form onSubmit={submitHandler}>
          <div>
            <div className="form-item_input">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={enteredName}
                onChange={nameChangeHandler}
              />
            </div>
            <div className="form-item_input">
              <label htmlFor="userage">Age (Years)</label>
              <input
                id="userage"
                type="number"
                min="0"
                step="1"
                value={enteredAge}
                onChange={ageChangeHandler}
              />
            </div>
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default NewUserForm;
