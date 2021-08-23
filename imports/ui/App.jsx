import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Board } from "./Board/Board";
import { RegisterPage } from "./RegisterPage/RegisterPage";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <div>
      <BrowserRouter>
        {user ? <Redirect to="board" /> : <Redirect to="/" />}
        <div>
          <Switch>
            {user ? (
              <Route path="/board">
                <Board />
              </Route>
            ) : (
              <>
                <Route exact path="/">
                  <LandingPage />
                </Route>
                <Route path="/reg">
                  <RegisterPage />
                </Route>
              </>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
