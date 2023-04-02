//Skeleton code help from module 21 lesson 25 client/src/utils/queries.js
import { gql } from '@apollo/client';

export const GET_ME = gql`
query Query {
  me {
    username
    bookCount
    savedBooks {
      image
      title
      description
      authors
      link
    }
  }
}
`;
