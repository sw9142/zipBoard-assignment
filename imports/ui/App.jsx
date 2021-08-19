import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { LandingPage } from "./LandingPage/LandingPage";
import { Board } from "./Board/Board";
import { RegisterPage } from "./RegisterPage/RegisterPage";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div style={{ padding: 20, border: "5px solid gray" }}>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/board" component={Board} />
            <Route path="/reg" component={RegisterPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};
