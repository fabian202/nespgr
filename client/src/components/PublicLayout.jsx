import React from "react";
import { MDBContainer } from "mdbreact";

const PublicLayout = props => {
  const Component = props.component;
  return (
    <MDBContainer>
      <Component {...props} />
    </MDBContainer>
  );
};

export default PublicLayout;
