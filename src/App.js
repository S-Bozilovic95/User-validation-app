import React, { useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import NewUserForm from "./components/NewUser/NewUserForm";
import Users from "./components/Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [errorType, setErrorType] = useState("none");

  const addUserHandler = (newUser) => {
    if (newUser.name.trim().length === 0) {
      return errorTypeHandler("empty");
    } else if (newUser.age <= 0) {
      return errorTypeHandler("age");
    } else {
      setUsers((prevUsers) => {
        return [newUser, ...prevUsers];
      });
    }
  };

  const errorTypeHandler = (type) => {
    setErrorType(type);
  };

  return (
    <div>
      <NewUserForm
        onAddUser={addUserHandler}
        errorTypeHandler={errorTypeHandler}
      />
      {users.length > 0 && <Users allUsers={users} />}
      {errorType === "age" ? (
        <ErrorMessage
          messageText={"Please enter a valid age (>0)"}
          errorTypeHandler={errorTypeHandler}
        />
      ) : errorType === "empty" ? (
        <ErrorMessage
          messageText={"Please enter a valid name and age (non-empty values)."}
          errorTypeHandler={errorTypeHandler}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
