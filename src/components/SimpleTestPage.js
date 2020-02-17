import React, { useState, useEffect } from "react";
import { reduxForm } from "redux-form";
import get from "lodash/get";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useLocation } from "react-router-dom";

import { SimpleFormFields } from "./FormFields/SimpleFormFields";
import { SimpleTestFormController } from "./FormControllers/SimpleTestFormController";
import { PageTitle } from "./Layout/PageTitle";
import { PageLayout } from "./Layout/PageLayout";
import { PeopleTable } from "../Queries/PeopleTable";

const AlertDialog = ({ open, title, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  );
};

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
    <PageLayout>
      <PageTitle title="Simple Test Form" />
      <SimpleTestFormController>
        {props => <SimpleTestForm {...props} />}
      </SimpleTestFormController>
      <PeopleTable tableHead={["nodeId", "id", "firstName", "lastName"]} />
      <AlertDialog
        open={opened}
        onClose={handleDialogClose}
        title={`New ID #${personId}`}
      />
    </PageLayout>
  );
};
