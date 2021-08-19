import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { BoardCollection } from "/imports/api/BoardCollection";
import { Feeds } from "./FeedForm";
import { FeedForm } from "./FeedForm";

export const Board = () => {
  const feeds = useTracker(() => BoardCollection.find({}).fetch());
  console.log("feeds: ", feeds[0]);

  const onClickHandler = () => {
    Meteor.logout();
  };
  return (
    <>
      <input type="submit" value="logout" onClick={onClickHandler} />
      <h1>Board</h1>
      <FeedForm />
      {/* <ul>
        {feeds.map((feed) => (
          <Feeds key={feed._id} text={feed.text} user={feed.user} />
        ))}
      </ul> */}
    </>
  );
};
