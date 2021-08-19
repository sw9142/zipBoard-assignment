import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { BoardCollection } from "/imports/api/BoardCollection";
import { useTracker } from "meteor/react-meteor-data";

export const FeedForm = () => {
  const [Text, setText] = useState("");
  const user = useTracker(() => Meteor.user());
  console.log("user: ", user);

  const onChangeHandler = (e) => {
    console.log("e.target.value: ", e.target.value);
    setText(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

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
