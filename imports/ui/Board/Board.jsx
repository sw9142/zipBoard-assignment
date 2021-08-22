import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { BoardCollection } from "/imports/api/BoardCollection";
import { Feeds } from "./Feeds";
import { FeedForm } from "./FeedForm";
import { useHistory } from "react-router-dom";

export const Board = () => {
  const user = useTracker(() => Meteor.user());
  const history = useHistory();
  const feeds = useTracker(() =>
    BoardCollection.find({}, { sort: { createdAt: -1 } }).fetch()
  );
  console.log("feeds: ", feeds);

  const onClickHandler = () => {
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
      <div className="greeting">Discussion Board</div>
      <FeedForm />
      <ul className="feedslist">
        {feeds &&
          feeds.map((feed, index) => (
            <div key={index}>
              <Feeds
                id={feed._id}
                text={feed.text}
                emailId={feed.user.emails[0].address.split("@")}
                isOwner={feed.user._id === user._id}
              />
            </div>
          ))}
      </ul>
    </>
  );
};
