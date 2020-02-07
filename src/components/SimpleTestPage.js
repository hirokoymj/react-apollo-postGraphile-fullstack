import React from "react";
import { Field, reduxForm } from "redux-form";
import { useMutation } from "@apollo/react-hooks";
import get from "lodash/get";

import { CREATE_PERSON } from "../Mutations/CreatePeople";

const SimpleTestFormController = ({ children }) => {
  const initialValues = {};
  const [createPerson] = useMutation(CREATE_PERSON);

  const onSubmit = async values => {
    try {
      // return new Promise(resolve => {
      //   setTimeout(() => resolve(), 1000);
      // });

      const resp = await createPerson({
        variables: {
          person: {
            firstName: values.firstName,
            lastName: values.lastName
          }
        }
      });
      console.log(resp);
      const id = get(resp, "data.createPerson.person.id");
      console.log(id);
    } catch (e) {
      console.error(e);
    }
  };

  const validate = values => {
    let errors = {};

    if (!values.firstName) errors.firstName = "Required";

    if (!values.lastName) errors.lastName = "Required";
    return errors;
  };

  return children({
    initialValues,
    validate,
    onSubmit
  });
};

const SimpleFormFields = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="input"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="input"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          {submitting ? "Submitting" : "Submit"}
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </>
  );
};

export const SimpleTestForm = reduxForm({
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

export const SimpleTestPage = () => {
  return (
    <>
      <h1>Simple Form aaaaa</h1>
      <SimpleTestFormController>
        {props => <SimpleTestForm {...props} />}
      </SimpleTestFormController>
    </>
  );
};
