import React, { useState } from "react";
import ReactDOM from "react-dom";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Wrapper from "./components/Helpers/Wrapper";
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

  // kada koristim portal, komponente (obicno popUp ili overlay)
  // premestam u poseban <div id="message-text-root"></div>
  // koji se nalazi u public/index.html kako bih na taj nacin
  // preventirao da overlay npr koji treba da bude pri vrhu strukture
  // bude duboko nestovan na nekom drugom mestu u aplikaciji i na taj
  // nacin uzrokuje neke bagove ili slicno
  // ovo je posebno vazno na vecim aplikacijama
  // dobra praksa je da sve popUp komponente stavim u jedan root div
  return (
    <Wrapper>
      <NewUserForm
        onAddUser={addUserHandler}
        errorTypeHandler={errorTypeHandler}
      />
      {users.length > 0 && <UsersList allUsers={users} />}
      {errorType === "age"
        ? ReactDOM.createPortal(
            <ErrorMessage
              messageText={"Please enter a valid age (>0)"}
              errorTypeHandler={errorTypeHandler}
            />,
            document.getElementById("error-message-root")
          )
        : errorType === "empty"
        ? ReactDOM.createPortal(
            <ErrorMessage
              messageText={
                "Please enter a valid name and age (non-empty values)."
              }
              errorTypeHandler={errorTypeHandler}
            />,
            document.getElementById("error-message-root")
          )
        : ""}
    </Wrapper>
  );
}

export default App;
