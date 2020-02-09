import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useMutation } from "@apollo/react-hooks";
import get from "lodash/get";
import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useHistory, useLocation } from "react-router-dom";

import { CREATE_PERSON } from "../Mutations/CreatePeople";

const AlertDialog = ({ open, title }) => {
  console.log("AlertDialog");
  console.log(open);
  return (
    <Dialog open={open}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  );
};

const SimpleTestFormController = ({ children }) => {
  const initialValues = {};
  const [createPerson] = useMutation(CREATE_PERSON);
  const history = useHistory();

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
    console.log("useEffect");

    const id = get(location, "state.personId");
    setPersonId(id);
    console.log(personId);
    if (personId !== "") {
      setOpened(true);
    } else {
      setOpened(false);
    }
  }, [location, personId]);

  return (
    <>
      <h1>Simple Form aaaaa</h1>
      <SimpleTestFormController>
        {props => <SimpleTestForm {...props} />}
      </SimpleTestFormController>
      <AlertDialog open={opened} title={`New ID #${personId}`} />
    </>
  );
};
