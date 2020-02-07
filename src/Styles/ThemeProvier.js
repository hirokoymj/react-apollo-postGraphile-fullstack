import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";

import { exampleTheme } from "./ExampleTheme";

console.log(exampleTheme);

export const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={exampleTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};



