//Skeleton code help from module 21 lesson 25 server/schemas/typeDef.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]!
  }

    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: newBook): User
    removeBook(bookId: String!): User
  }
`;
//Input type help at https://www.apollographql.com/tutorials/side-quest-intermediate-schema-design/03-the-input-type

module.exports = typeDefs;
