# Apollo Client - React

## @apollo/react-hooks

- [@apollo/react-hooks]()
- [Apollo Client: React](https://www.apollographql.com/docs/react/)

### Installation

```js
npm install @apollo/react-hooks
```
<hr />

### useMutation - Example 1

- POINT - variables have to pass `person object`!!
```js
{ person: $person }
===> CORRECT
variables: {
  person: {
    firstName: values.firstName,
    lastName: values.lastName
  }
}
===> WRONG
variables: {
  firstName: values.firstName,
  lastName: values.lastName
}
```

GraphQL
```js
export const CREATE_PERSON = gql`
  mutation CreatePerson($person: PersonInput!) {
    createPerson(input: { person: $person }) {
      person {
        id
        firstName
        lastName
      }
    }
  }
`;
```

Mutation
```js
import { useMutation } from "@apollo/react-hooks";
import { CREATE_PERSON } from "../Mutations/CreatePeople";

const SimpleTestFormController = () => {
  const [createPerson, { data }] = useMutation(CREATE_PERSON);

  const onSubmit = values => {
    try {
      const req = createPerson({
        variables: {
          person: {
            firstName: values.firstName,
            lastName: values.lastName
          }
        }
      });
    } catch (e) {
      console.error(e);
    }
  };
```
<hr />

