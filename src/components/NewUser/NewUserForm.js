import { useState } from "react";
import Button from "../UI/Button";
import styles from "./NewUserForm.module.css";

const NewUserForm = ({ onAddUser, errorTypeHandler }) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    event.preventDefault();
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    event.preventDefault();
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newUser = {
      name: enteredName,
      age: +enteredAge,
      id: Math.random().toString(),
    };

    onAddUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form className={styles["new-user-form"]} onSubmit={submitHandler}>
      <div className={styles["new-user-form__controls"]}>
        <div className={styles["new-user-form__control"]}>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={styles["new-user-form__control"]}>
          <label>Age (years)</label>
          <input type="number" value={enteredAge} onChange={ageChangeHandler} />
        </div>
      </div>
      <Button type={"submit"} text={"Add User"} />
    </form>
  );
};

export default NewUserForm;
