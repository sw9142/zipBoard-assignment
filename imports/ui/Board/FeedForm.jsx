import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { BoardCollection } from "/imports/api/BoardCollection";
import { useTracker } from "meteor/react-meteor-data";

export const FeedForm = () => {
  const [Text, setText] = useState("");
  const user = useTracker(() => Meteor.user());

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit click!");
    BoardCollection.insert({
      text: Text,
      user: user,
    });
  };
  return (
    <div>
      {/* {user.emails[0].address} */}
      <form onSubmit={onSubmitHandler}>
        <textarea rows="8" value={Text} onChange={onChangeHandler}></textarea>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
