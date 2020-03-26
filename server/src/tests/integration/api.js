import axios from "axios";

const API_URL = "http://localhost:5000/graphql";

export const register = async variables =>
  axios.post(API_URL, {
    query: `
    mutation(
      $username: String!,
      $email: String!,
      $password: String!
    ) {
      register(
        username: $username,
        email: $email,
        password: $password
      ) {
        email
        username
      }
    }
  `,
    variables
  });

export const login = async variables =>
  axios.post(API_URL, {
    query: `
    mutation(
      $email: String!,
      $password: String!
    ) {
      login(
        email: $email,
        password: $password
      ) {
        token
      }
    }
  `,
    variables
  });

export const createTodo = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
    mutation(
      $todo: String!
    ) {
      createTodo(
        todo: $todo,
      ) {
        todo
      }
    }
  `,
      variables
    },
    {
      headers: {
        "x-access-token": token
      }
    }
  );

export const getTodos = async token =>
  await axios.post(
    API_URL,
    {
      query: `
        {
          getTodos {
            id
            todo
          }
        }
      `
    },
    {
      headers: {
        "x-access-token": token
      }
    }
  );

export const updateTodo = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
    mutation(
      $todo: String!
    ) {
      updateTodo(
        todo: $todo,
      ) {
        todo
      }
    }
  `,
      variables
    },
    {
      headers: {
        "x-access-token": token
      }
    }
  );

export const deleteTodo = async (variables, token) =>
  axios.post(
    API_URL,
    {
      query: `
    mutation(
      $todo: String!
    ) {
      deleteTodo(
        todo: $todo,
      ) {
        todo
      }
    }
  `,
      variables
    },
    {
      headers: {
        "x-access-token": token
      }
    }
  );
