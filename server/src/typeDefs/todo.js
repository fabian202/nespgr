import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getTodos: [Todo]
  }

  extend type Mutation {
    createTodo(todo: String!) : Todo,
    deleteTodo(id: Int!) : Boolean!,
    updateTodo(id: Int!, todo: String!) : Boolean!
  }

  type Todo {
    id: ID!
    todo: String!
    userId: Int!
    user: User
  }
`