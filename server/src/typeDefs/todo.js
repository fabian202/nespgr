import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    todos(userId: Int!): [Todo]
  }

  extend type Mutation {
    create(todo: String!, userId: Int!) : Todo,
  }

  type Todo {
    id: ID!
    todo: String!
    userId: Int!
    user: User
  }
`