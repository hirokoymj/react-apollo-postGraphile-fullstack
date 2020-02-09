import React from "react";
import { useQuery } from "@apollo/react-hooks";
import get from "lodash/get";
import { Route, Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
//import Container from "@material-ui/core/Container";
import DefaultPageTitle from "./PageTitle";
import { PageTitle } from "./PageTitle";

import { ALL_PEOPLE, PERSON_BY_ID } from "../Queries/PeopleQueries";
//import { MyDropzone } from "./MyDropzone";
import { SimpleTestPage } from "./SimpleTestPage";

const HomepageLayout = ({ children }) => {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      {children}
    </Grid>
  );
};

const PeopleTable = () => {
  const { loading, data } = useQuery(ALL_PEOPLE);
  const all_people = get(data, "allPeople.edges", []);

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <>
          <DefaultPageTitle title="All Users" />
          <ul>
            {all_people.map(({ node }) => (
              <Link to={`/home/${node.id}`} key={node.id}>
                <li>
                  {node.id}, {node.firstName}, {node.lastName}
                </li>
              </Link>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export const SinglePeople = () => {
  let { id } = useParams();
  const { loading, data } = useQuery(PERSON_BY_ID, {
    variables: { id: parseInt(id) }
  });
  const { nodeId, firstName, lastName } = get(data, "personById", {});

  return (
    <div>
      <PageTitle title="User Details" />
      {!loading && (
        <div>
          <p>id: {nodeId}</p>
          <p>FirstName: {firstName}</p>
          <p>LastName: {lastName}</p>
        </div>
      )}
    </div>
  );
};

export const Homepage = () => {
  console.log("homepage");
  return (
    <>
      <HomepageLayout>
        <Grid container>
          <Grid item xs={6}>
            <PeopleTable />
            <SimpleTestPage />
          </Grid>
          <Grid item xs={6}>
            <Route path="/home/:id" component={SinglePeople} />
          </Grid>
        </Grid>
      </HomepageLayout>
    </>
  );
};
