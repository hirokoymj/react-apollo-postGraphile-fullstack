import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { Homepage, SinglePeople } from "../components/Homepage";
import { NotFoundPage } from "../components/NotFoundPage";
import { SimpleTestPage } from "../components/SimpleTestPage";

const IntroPage = () => {
  return <h1>Intro Page</h1>;
};
const About = () => {
  return <h1>About</h1>;
};
const TestPage = () => {
  console.log("test page");
  return <h1>Test Page</h1>;
};

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IntroPage} exact={true} />
        <Route path="/home" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/test" component={TestPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
