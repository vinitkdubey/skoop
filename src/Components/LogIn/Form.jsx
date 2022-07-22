import React from "react";
import "./Form.css";

const Form = ({ submitFn, errorFn }) => {
  return (
    <div className="login-form">
      <div className="title">Sign In</div>
      <form onSubmit={submitFn}>
        <div className="input-container">
          <label htmlFor="uname">Username</label>
          <input type="text" name="uname" id="uname" required />
          {errorFn("uname")}
        </div>
        <div className="input-container">
          <label htmlFor="pass">Password</label>
          <input type="password" name="pass" id="pass" required />
          {errorFn("pass")}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
