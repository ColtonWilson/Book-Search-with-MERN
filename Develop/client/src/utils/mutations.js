//Skeleton code help from module 21 lesson 25 client/src/utils/mutations.js
//Apollographql used to create statements
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;


export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
        image
        description
        authors
        link
      }
    }
  }
}
`;

export const SAVE_BOOK = gql`
mutation Mutation {
  saveBook {
    username
    bookCount
    savedBooks {
      title
      image
      description
      authors
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: String!) {
  removeBook(bookId: $bookId) {
    username
    bookCount
    savedBooks {
      title
      image
      description
      authors
      link
    }
  }
}
`;