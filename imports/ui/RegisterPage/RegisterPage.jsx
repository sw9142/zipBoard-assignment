import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

export const RegisterPage = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit click!");
    Accounts.createUser({
      email: Email,
      password: Password,
    });
  };

  return (
    <>
      <h1>register page</h1>
      <form className="task-form" onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="email"
          value={Email}
          placeholder="email"
          onChange={onChangeHandler}
          required
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={Password}
          onChange={onChangeHandler}
          required
        />

        <button type="submit">Sign UP</button>
      </form>
    </>
  );
};
