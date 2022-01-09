import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

const ColorTheme = ({ setColorTheme, colorTheme }) => {
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">TODO LIST</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/description">Project Description</Nav.Link>
            <Nav.Link href="/todos">See all tasks</Nav.Link>
            <NavDropdown title="Actions" id="basic-nav-dropdown">
              <NavDropdown.Item href="/todos/create">
                Create a new Task
              </NavDropdown.Item>
              <NavDropdown.Item href="/todos">See all tasks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recycle">Recycle bin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="theme-options">
          <div
            onClick={() => {
              handleClick("theme-white");
            }}
            id="theme-white"
            className={`${colorTheme === "theme-white" ? "active" : ""}`}
          />
          <div
            onClick={() => {
              handleClick("theme-blue");
            }}
            id="theme-blue"
            className={`${colorTheme === "theme-blue" ? "active" : ""}`}
          />
          <div
            onClick={() => {
              handleClick("theme-orange");
            }}
            id="theme-orange"
            className={`${colorTheme === "theme-orange" ? "active" : ""}`}
          />
          <div
            onClick={() => {
              handleClick("theme-red");
            }}
            id="theme-red"
            className={`${colorTheme === "theme-red" ? "active" : ""}`}
          />
          <div
            onClick={() => {
              handleClick("theme-green");
            }}
            id="theme-green"
            className={`${colorTheme === "theme-green" ? "active" : ""}`}
          />
          <div
            onClick={() => {
              handleClick("theme-black");
            }}
            id="theme-black"
            className={`${colorTheme === "theme-black" ? "active" : ""}`}
          />
        </div>
      </Navbar>
    </>
  );
};

export default ColorTheme;
