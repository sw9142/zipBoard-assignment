import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { useHistory } from "react-router-dom";

export const RegisterPage = () => {
  const history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Msg, setMsg] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const onClickHandler = () => {
    history.push("/");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit click!");
    Accounts.createUser(
      {
        email: Email,
        password: Password,
      },
      (err) => {
        if (err) {
          setMsg(err.reason);
          console.log("err: ", err);
        } else {
          console.log("success!");
          history.push("/");
        }
      }
    );
  };

  return (
    <div className="registerpage">
      <div className="greeting">Create a free zipBoard Assginment account</div>
      <div className="message"> {Msg} </div>
      <form className="task-form" onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={Email}
          placeholder="Email"
          onChange={onChangeHandler}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={Password}
          onChange={onChangeHandler}
          required
        />
        <div className="btn-container">
          <button type="submit">Create Account</button>
        </div>
      </form>

      <div className="gotologin">
        Already have an account?
        <button className="btn-gotologin" onClick={onClickHandler}>
          Log in
        </button>
      </div>
    </div>
  );
};
