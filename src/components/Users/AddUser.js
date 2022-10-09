import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import { useState } from "react";
// import UsersList from "./UsersList";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredFullname, setEnteredFullname] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  // const [deleteUser, setDeleteUser] = useState();
  // const [editUser, setEditUser] = useState(null);
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredFullname.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (enteredFullname < `{Syed Wirzan}`) {
      setError({
        title: "Banned User!",
        message: "This user is banned by Users List!!.",
      });
      return;
    }
    if (enteredUsername < `{Wirzan}`) {
      setError({
        title: "Banned User!",
        message: "This user is banned by Users List!!.",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    if (enteredAge > 120) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (< 120).",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredFullname("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const fullnameChangeHandler = (event) => {
    setEnteredFullname(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  // const deleteHanler = () => {
  //   const delUser = UsersList.filter((use) => use.id !== id);
  //   setDeleteUser([...delUser]);
  // };
  // const editHanler = () => {
  //   setEditUser();
  // };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="fullname">Fullname</label>
          <input
            id="fullname"
            type="text"
            value={enteredFullname}
            onChange={fullnameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add Users</Button>
          {/* <button onChange={() => deleteHandler(username.id)}>Delete</button> */}
        </form>
      </Card>
    </>
  );
};
export default AddUser;
