import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { useForm } from "../hooks/useForm";
import { useMutation } from "@apollo/react-hooks";
import { navigate } from "hookrouter";
import gql from "graphql-tag";

const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const { onChange, onSubmit, values } = useForm(
    () => {
      console.log("possst");
      loginUser();
    },
    {
      email: "",
      password: ""
    }
  );

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login } }) {
      console.log(login);
      // context.login(userData);
      navigate("/register");
    },
    onError(err) {
      console.log(err);
      //setErrors(err.graphQLErrors[0].extensions.exception.errors);
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
                <p className="h5 text-center mb-4">Sign in</p>
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
                  <MDBBtn type="submit">Login</MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default Login;
