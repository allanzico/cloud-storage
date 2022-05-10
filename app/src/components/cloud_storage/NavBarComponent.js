import React from "react";
import { Navbar, Nav, Dropdown, NavDropdown, Container } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Dashboard from "./Dashboard";

const NavBarComponent = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        BABY DRIVE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        </Nav>
        <Nav className="ml-auto" >
          <Nav.Link eventKey={2} as={Link} to="/user">
            <Avatar />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
