import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBBox
} from "mdbreact";
import { useForm } from "../hooks/useForm";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { navigate } from "hookrouter";

const REGISTER_USER = gql`
  mutation register($email: String!, $username: String!, $password: String!) {
    register(email: $email, username: $username, password: $password) {
      username
      email
      id
    }
  }
`;

const Register = () => {
  const { onChange, onSubmit, values } = useForm(
    () => {
      registerUser();
    },
    {
      email: "",
      username: "",
      password: ""
    }
  );

  const [registerUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register } }) {
      console.log(register);
      navigate("/");
      console.log("not navigate");
    },
    onError(err) {
      console.log(err);
    },
    variables: values
  });

  return (
    <React.Fragment>
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={onSubmit}>
                  <p className="h4 text-center py-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      name="email"
                      validate
                      error="wrong"
                      success="right"
                      value={values.email}
                      onChange={onChange}
                    />
                    <MDBInput
                      label="Type your username"
                      icon="user"
                      group
                      type="text"
                      name="username"
                      validate
                      error="wrong"
                      success="right"
                      value={values.username}
                      onChange={onChange}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      name="password"
                      type="password"
                      validate
                      value={values.password}
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Register</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default Register;
