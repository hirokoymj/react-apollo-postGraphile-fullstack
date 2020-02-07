# Redux Form


- [Redux Form](#redux-form)
  - [submitting property](#submitting-property)
  - [formValueSelector](#formvalueselector)
  - [Redux Form Architecture](#redux-form-architecture)


## submitting property

[submitting](https://redux-form.com/8.3.0/docs/api/reduxform.md/#-code-onsubmit-function-code-optional-)

>If your onSubmit function returns a promise, the **submitting** property will be set to true until the promise has been resolved or rejected.

```js
export const SimpleTestForm = reduxForm({
  form: "SIMPLE_FORM"
})(({ handleSubmit, submitting }) => { //<-- !!!submitting !!!
  return (
    <SimpleFormFields
      handleSubmit={handleSubmit}
      submitting={submitting}
    />
  );
});
```

```js


```

## formValueSelector

- `formValueSelector` allows any react components to access a redux form values.

```js
import { formValueSelector } from "redux-form"; // ES6

const selector = formValueSelector("myFormName");

connect(state => ({
  first: selector(state, "firstName"),
  last: selector(state, "lastName")
}))(MyFormComponent);
```

<hr />

## Redux Form Architecture

- FormController
- Redux Form Component
- FormFields

```js
import React from "react";
import { Field, reduxForm } from "redux-form";

const SimpleTestFormController = ({ children }) => {
  const initialValues = {
    firstName: "Hiroko"
  };

  const onSubmit = values => {};

  const validate = values => {
    let errors = {};
    if (!values.firstName) errors.firstName = "Required";

    return errors;
  };

  return children({
    initialValues,
    validate,
    onSubmit
  });
};
```

```js
const SimpleFormFields = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <>
      <Field
        name="firstName"
        component="input"
        type="text"
        placeholder="First Name"
      />
      <Field
        name="lastName"
        component="input"
        type="text"
        placeholder="Last Name"
      />
    </>
  );
};
```

```js
export const SimpleTestForm = reduxForm({
  form: "SIMPLE_FORM"
})(({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <SimpleFormFields
      handleSubmit={handleSubmit}
      pristine={pristine}
      reset={reset}
      submitting={submitting}
    />
  );
});

export const SimpleTestPage = () => {
  return (
    <SimpleTestFormController>
      {props => <SimpleTestForm {...props} />}
    </SimpleTestFormController>
  );
};
```


