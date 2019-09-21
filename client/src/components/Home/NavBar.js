import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Button, Form, FormControl, Navbar, Nav } from "react-bootstrap";

class NavBar extends Component {
  boxClick = e => {
    this.setState({ bgColor: "yellow" });
  };

  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" expand="md">
        <Navbar.Brand href="/">Bucketroo</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Cities</Nav.Link>
            <Nav.Link href="#pricing">Join our team</Nav.Link>
          </Nav>
          <Form inline>
            <Button className="btn-navbar" variant="outline-primary">
              <Nav.Link href="/register">Login</Nav.Link>
            </Button>
            <Button className="btn-navbar" variant="outline-primary">
              <Nav.Link href="/register">Register</Nav.Link>
            </Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    );
  }
}

export default NavBar;
