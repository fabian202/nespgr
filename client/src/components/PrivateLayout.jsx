import React from "react";
import { MDBContainer } from "mdbreact";
import AppBar from "./AppBar";

const PrivateLayout = props => {
  const Component = props.component;
  return (
    <MDBContainer fluid>
      <AppBar />
      <Component {...props} />
    </MDBContainer>
  );
};

export default PrivateLayout;
