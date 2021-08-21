import React, { useState } from "react";
import { BoardCollection } from "/imports/api/BoardCollection";

export const Feeds = ({ id, text, user }) => {
  console.log("baord collection: ", BoardCollection);
  const [NewText, setNewText] = useState("");
  const [IsEdit, setIsEdit] = useState(false);
  const onClickHandler = (e) => {
    if (e.target.name === "edit") {
      setIsEdit(true);
    } else if (e.target.name === "delete") {
    }
  };

  const onChangeHandler = (e) => {
    setNewText(e.target.value);
  };

  const onUpdateHandler = (e) => {
    console.log("e.target.name: ", e.target.name);
    if (e.target.name === "update") {
      e.preventDefault();
      BoardCollection.update(
        { _id: id },
        {
          $set: {
            text: NewText,
          },
        },
        function (err, res) {
          if (err) {
            console.log(err);
            future.throw(new Meteor.Error("500", err));
          }
          setIsEdit(false);
        }
      );
    } else if (e.target.name === "cancel") {
      setIsEdit(false);
    }
  };
  return (
    <div className="feeds-container">
      <li className="feeds-textbox">
        <div className="user-id"> {user._id} </div>

        {IsEdit ? (
          <>
            <form className="feedform-form">
              <textarea
                className="feedform-textarea"
                rows="8"
                value={NewText}
                onChange={onChangeHandler}
              ></textarea>
              <button
                className="feedform-submit"
                name="update"
                onClick={onUpdateHandler}
              >
                Update
              </button>
              <button
                className="feedform-submit"
                name="cancel"
                onClick={onUpdateHandler}
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="user-text"> {text} </div>
            {user && (
              <div className="feeds-btns">
                <button onClick={onClickHandler} name="edit">
                  edit
                </button>
                <button onClick={onClickHandler} name="delete">
                  delete
                </button>
              </div>
            )}
          </>
        )}
      </li>
    </div>
  );
};
