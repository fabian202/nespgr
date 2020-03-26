import { gql } from "apollo-server-express";

export default gql`
  extend type Query {
    getTodos: [Todo]
  }

  extend type Mutation {
    createTodo(todo: String!) : Todo,
    deleteTodo(todoId: Int!) : Todo,
    updateTodo(todoId: Int!) : Todo
  }

  type Todo {
    id: ID!
    todo: String!
    userId: Int!
    user: User
  }
`