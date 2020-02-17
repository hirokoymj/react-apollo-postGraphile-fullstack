import React from "react";
import Container from "@material-ui/core/Container";

export const PageLayout = ({ children }) => {
  return <Container maxWidth="lg">{children}</Container>;
};
