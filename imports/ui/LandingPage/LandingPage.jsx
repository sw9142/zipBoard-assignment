import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Board } from "../Board/Board";

export const LandingPage = ({ history }) => {
  const user = useTracker(() => Meteor.user());

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

  const onClickHandler = () => {
    history.push("/reg");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(Email, Password);
  };

  return (
    <>
      {user ? (
        <Board />
      ) : (
        <>
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

            <button type="submit">Log In</button>
          </form>
          <button onClick={onClickHandler}>don't have account yet?</button>
        </>
      )}
    </>
  );
};
