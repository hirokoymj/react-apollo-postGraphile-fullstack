import ApolloBoost from "apollo-boost";
import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";

import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "./Styles/ThemeProvier";
import { ReduxProvider } from "./Redux/ReduxProvider";

const client = new ApolloBoost({
  uri: "http://localhost:4000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <ReduxProvider>
      <ThemeProvider>
        <AppRouter />
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>
);

render(<App />, document.getElementById("root"));
