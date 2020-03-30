import React from "react";
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";

const AppBar = props => (
  <MDBNavbar color="indigo" dark expand="md">
    <MDBNavbarBrand>
      <strong className="white-text">Tasks</strong>
    </MDBNavbarBrand>
  </MDBNavbar>
);

export default AppBar;
