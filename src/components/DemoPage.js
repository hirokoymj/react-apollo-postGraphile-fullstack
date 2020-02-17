import React from "react";
import { reduxForm } from "redux-form";
import get from "lodash/get";
import { useQuery } from "@apollo/react-hooks";

import { SimpleTestFormController } from "./FormControllers/SimpleTestFormController";
import { SimpleFormFields } from "./FormFields/SimpleFormFields";
import { PageTitle } from "./Layout/PageTitle";
import { ALL_PEOPLE } from "../Queries/PeopleQueries";

const SimpleTestForm = reduxForm({
  form: "SIMPLE_FORM"
})(({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <SimpleFormFields
      handleSubmit={handleSubmit}
      submitting={submitting}
      pristine={pristine}
      reset={reset}
    />
  );
});

export const useAllPeopleTable = options => {
  const { data, loading, error } = useQuery(ALL_PEOPLE, options);

  const pageInfo = get(data, "allPeople.pageInfo", {});
  const totalCount = get(data, "allPeople.totalCount", 0);
  const mappedData = get(data, "allPerson.edges", []);

  return {
    data,
    mappedData,
    pageInfo,
    loading,
    error,
    totalCount
  };
};

const TableView = ({ data }) => {
  return (
    <table>
      {data.map(person => (
        <tr>
          <td>{person.firstName}</td>
          <td>{person.lastName}</td>
        </tr>
      ))}
    </table>
  );
};

const AllPeopleTable = () => {
  const { loading, data, totalCount, mappedData } = useQuery(ALL_PEOPLE);

  return (
    <div>{loading ? <p>loading</p> : <TableView data={mappedData} />}</div>
  );
};

export const DemoPage = () => {
  return (
    <>
      <PageTitle title="Apollo Client Demo" />
      <SimpleTestFormController>
        {props => <SimpleTestForm {...props} />}
      </SimpleTestFormController>
    </>
  );
};
