import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { BoardCollection } from "/imports/api/BoardCollection";
import { Feeds } from "./Feeds";
import { FeedForm } from "./FeedForm";

export const Board = ({ history }) => {
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
