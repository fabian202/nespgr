import axios from 'axios'

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