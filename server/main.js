import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { BoardCollection } from "/imports/api/BoardCollection";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

function insertFeed({ text, user }) {
  BoardCollection.insert({ text, user, createdAt: new Date() });
}

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
  // if (BoardCollection.find().count() === 0) {
  //   insertFeed({
  //     text: "first text",
  //     user: { _id: "1234", emails: "1234@gmail.com" },
  //   });
  // }
});
