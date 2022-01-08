// import React from "react";
import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const Navigator = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">TODO LIST</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">See all tasks</Nav.Link>
          <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Create a new Task</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">See all tasks</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Recycle bin
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigator;
