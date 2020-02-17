import { gql } from "apollo-boost";

// export const ALL_PEOPLE = gql`
//   query AllPeople {
//     allPeople {
//       edges {
//         node {
//           id
//           firstName
//           lastName
//         }
//       }
//     }
//   }
// `;

export const ALL_PEOPLE = gql`
  query AllPeople {
    allPeople {
      edges {
        node {
          id
          nodeId
          firstName
          lastName
          fullName
          about
          createdAt
          updatedAt
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`;

export const PERSON_BY_ID = gql`
  query PersonById($id: Int!) {
    personById(id: $id) {
      nodeId
      id
      firstName
      lastName
    }
  }
`;
