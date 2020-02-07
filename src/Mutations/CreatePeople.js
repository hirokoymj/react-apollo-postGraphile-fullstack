import { gql } from "apollo-boost";

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
