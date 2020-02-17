import React from "react";
import { Field } from "redux-form";

export const SimpleFormFields = ({
  handleSubmit,
  pristine,
  reset,
  submitting
}) => {
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
