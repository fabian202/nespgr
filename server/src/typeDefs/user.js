import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    register(email: String!, password: String!, username: String!) : User
  }

  type User {
    id: ID!,
    email: String!,
    username: String!,
    password: String
  }

  type Token {
    iat: Int,
    exp: Int,
    token: String
  }
`