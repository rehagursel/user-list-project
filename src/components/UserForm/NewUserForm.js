import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";

import "./NewUserForm.css";

function NewUserForm(props) {
  const nameInputRef = useRef();        //ref is better than state when you need onnly read inputs
  const ageInputRef = useRef();

  /* const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState(""); */
  const [error, setError] = useState();

  /* const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }; */

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid Username and Age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid Age",
      });
      return;
    }

    const newUser = {
      name: enteredUserName,
      age: +enteredUserAge,
      id: Math.random().toString(),
    };

    props.onAddItem(newUser);
   /*  setEnteredName("");
    setEnteredAge(""); */
    nameInputRef.current.value = '';     //manupulating DOM without react is not appropriate dont use for addding or changing something
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
      <Card className="form-item">
        <form onSubmit={submitHandler}>
          <div className="form-item_input">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              /* value={enteredName}      //uncontrolled input component because we dont use react we read values with ref
              onChange={nameChangeHandler} */
              ref={nameInputRef}
            />
          </div>
          <div className="form-item_input">
            <label htmlFor="userage">Age (Years)</label>
            <input
              id="userage"
              type="number"
              min="0"
              step="1"
             /*  value={enteredAge}
              onChange={ageChangeHandler} */
              ref={ageInputRef}
            />
          </div>

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default NewUserForm;
 