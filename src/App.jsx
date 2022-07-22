import React, { createContext, useState } from "react";
import Form from "./Components/LogIn/Form";
import user from "./util/users";
import "./App.css";
import Home from "./Components/Home/Home";

export const UserContex = createContext();

const App = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [currUser, setCurrUser] = useState(null);

  const database = user;
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setCurrUser(userData.username);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <>
      {currUser === null ? (
        <Form submitFn={handleSubmit} errorFn={renderErrorMessage} />
      ) : (
        <UserContex.Provider value={{ currUser, setCurrUser }}>
          <Home />
        
        </UserContex.Provider>
      )}
    </>
  );
};

export default App;
