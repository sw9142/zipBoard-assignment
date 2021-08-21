import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { BoardCollection } from "/imports/api/BoardCollection";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

// function insertLink({ title, url }) {
//   UserCollection.insert({ title, url, createdAt: new Date() });
// }
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
  if (BoardCollection.find().count() === 0) {
    insertFeed({
      text: "first text",
      user: { _id: "1234", email: "1234@gmail.com" },
    });
  }
  // If the Links collection is empty, add some data.
  // if (LinksCollection.find().count() === 0) {
  //   insertLink({
  //     title: "Do the Tutorial",
  //     url: "https://www.meteor.com/tutorials/react/creating-an-app",
  //   });

  //   insertLink({
  //     title: "Follow the Guide",
  //     url: "http://guide.meteor.com",
  //   });

  //   insertLink({
  //     title: "Read the Docs",
  //     url: "https://docs.meteor.com",
  //   });

  //   insertLink({
  //     title: "Discussions",
  //     url: "https://forums.meteor.com",
  //   });
  // }
});
