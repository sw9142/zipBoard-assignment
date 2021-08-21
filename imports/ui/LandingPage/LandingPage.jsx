import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Board } from "../Board/Board";

export const LandingPage = ({ history }) => {
  const user = useTracker(() => Meteor.user());
  console.log("are you login?: ", user);

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
    history.push("/reg");
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(Email, Password, (err) => {
      if (err) {
        console.log(err);
        setMsg(err.reason);
      } else {
        history.push("/board");
      }
    });
  };

  return (
    <>
      {user ? (
        <Board />
      ) : (
        <div className="loginpage">
          <div className="greeting">
            Login to your zipBoard Assginment account
          </div>
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
              <button type="submit">Log In</button>
            </div>
          </form>

          <div className="createaccount">
            Don't have an account yet?
            <button className="btn-createaccount" onClick={onClickHandler}>
              Create an account
            </button>
          </div>
        </div>
      )}
    </>
  );
};
