import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Homepage } from "../components/Homepage";
import { NotFoundPage } from "../components/NotFoundPage";
//import { SimpleTestPage } from "../components/SimpleTestPage";
import { DemoPage } from "../components/DemoPage";

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
        <Route path="/demo" component={DemoPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
