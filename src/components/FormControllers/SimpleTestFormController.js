import { useMutation } from "@apollo/react-hooks";
import get from "lodash/get";
import { useHistory } from "react-router-dom";

import { CREATE_PERSON } from "../../Mutations/CreatePeople";
import { ALL_PEOPLE } from "../../Queries/PeopleQueries";

export const SimpleTestFormController = ({ children }) => {
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
