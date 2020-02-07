import React, { Fragment } from "react";

export default ({ title }) => {
  return <h2>{title}</h2>;
};

export const PageTitle = ({ title }) => {
  return (
    <>
      <h1>
        {title}
        <small>This is H1 title</small>
      </h1>
    </>
  );
};
