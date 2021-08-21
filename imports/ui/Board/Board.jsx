import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { BoardCollection } from "/imports/api/BoardCollection";
import { Feeds } from "./Feeds";
import { FeedForm } from "./FeedForm";
import { useHistory } from "react-router-dom";

export const Board = () => {
  const user = useTracker(() => Meteor.user());
  console.log("user in board:", user);
  const history = useHistory();
  const feeds = useTracker(() => BoardCollection.find({}).fetch());
  console.log("feeds: ", feeds);

  const onClickHandler = () => {
    console.log("logout click");
    Meteor.logout();
    history.push("/");
  };

  return (
    <>
      <div className="topbar">
        <input
          type="submit"
          className="btn-logout"
          value="logout"
          onClick={onClickHandler}
        />
      </div>
      <div className="greeting">Board</div>
      <FeedForm />
      <ul>
        {feeds &&
          feeds.map((feed, index) => (
            <div key={index}>
              <Feeds id={feed._id} text={feed.text} user={feed.user} />
            </div>
          ))}
      </ul>
    </>
  );
};
