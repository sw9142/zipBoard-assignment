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

    BoardCollection.insert({
      text: Text,
      user: user,
    });
    setText("");
  };
  return (
    <div className="feedform-container">
      <div className="feedform-title">What's on your mind?</div>
      <form className="feedform-form" onSubmit={onSubmitHandler}>
        <textarea
          className="feedform-textarea"
          rows="8"
          value={Text}
          onChange={onChangeHandler}
        ></textarea>
        <input className="feedform-submit" type="submit" value="Submit" />
      </form>
    </div>
  );
};
