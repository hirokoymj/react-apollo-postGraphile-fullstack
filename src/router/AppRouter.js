import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import { NotFoundPage } from "../components/NotFoundPage";
import { SimpleTestPage } from "../components/SimpleTestPage";

const IntroPage = () => {
  return <h1>Intro Page</h1>;
};

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IntroPage} exact={true} />
        <Route path="/home" component={Homepage} />
        <Route path="/SimpleTestPage" component={SimpleTestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
