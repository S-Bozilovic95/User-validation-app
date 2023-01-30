import React, { useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import NewUserForm from "./components/NewUser/NewUserForm";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [errorType, setErrorType] = useState("none");

  const addUserHandler = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
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
      {users.length > 0 && <UsersList allUsers={users} />}
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
