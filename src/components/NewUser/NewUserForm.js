import { useRef, useState } from "react";
import Button from "../UI/Button";
import styles from "./NewUserForm.module.css";

const NewUserForm = ({ onAddUser, errorTypeHandler }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
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
      age: enteredAge,
      id: Math.random().toString(),
    };

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return errorTypeHandler("empty");
    }

    if (+enteredAge < 0) {
      return errorTypeHandler("age");
    }

    onAddUser(newUser);
    setEnteredName("");
    setEnteredAge("");
  };

  // ref sluzi da bi mogli da procitam trenutnu vrednost elementa na koji je ref postavljen
  // skracuje kod i eliminise potrebu state-a u nekim slucajevima
  // takodje bolje optimizuje u ovom slucaju jer se state ne update-uje
  // na svaku promenu unosa
  // npr ovde bih mogao da u submitHandler funkciji koristim ref
  // umesto vrednosti prikupljenih iz stejta da bih dodao novog usera
  // pitanje je preference
  console.log(nameInputRef.current.value);

  return (
    <form className={styles["new-user-form"]} onSubmit={submitHandler}>
      <div className={styles["new-user-form__controls"]}>
        <div className={styles["new-user-form__control"]}>
          <label>Username</label>
          <input
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            ref={nameInputRef}
          />
        </div>
        <div className={styles["new-user-form__control"]}>
          <label>Age (years)</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
        </div>
      </div>
      <Button type={"submit"} text={"Add User"} />
    </form>
  );
};

export default NewUserForm;
