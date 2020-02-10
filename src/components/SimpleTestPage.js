import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useMutation } from "@apollo/react-hooks";
import get from "lodash/get";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory, useLocation } from "react-router-dom";

import { CREATE_PERSON } from "../Mutations/CreatePeople";
import { ALL_PEOPLE } from "../Queries/PeopleQueries";

const AlertDialog = ({ open, title, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  );
};

const SimpleTestFormController = ({ children }) => {
  const initialValues = {};
  const [createPerson] = useMutation(CREATE_PERSON);
  const history = useHistory();

  const onSubmit = values => {
    try {
      const resp = createPerson({
        variables: {
          person: {
            firstName: values.firstName,
            lastName: values.lastName
          }
        },
        refetchQueries: [
          {
            query: ALL_PEOPLE
          }
        ]
      });
      console.log(resp);
      const personId = get(resp, "data.createPerson.person.id");
      console.log(personId);
      history.push("/home", { personId });
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
  const [opened, setOpened] = useState(false);
  const [personId, setPersonId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const id = get(location, "state.personId", "");
    setPersonId(id);
    console.log(personId);
    if (personId !== "") {
      setOpened(true);
    } else {
      setOpened(false);
    }
  }, [location, personId]);

  const handleDialogClose = () => {
    setOpened(false);
    console.log(location);
    location.state = {};
    console.log(location);
  };

  return (
    <>
      <h1>Simple Form</h1>
      <SimpleTestFormController>
        {props => <SimpleTestForm {...props} />}
      </SimpleTestFormController>
      <AlertDialog
        open={opened}
        onClose={handleDialogClose}
        title={`New ID #${personId}`}
      />
    </>
  );
};
