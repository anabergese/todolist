import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import './App.scss';
import './switcher.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

// Importing the Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Description from './components/Description';
import ColorTheme from './components/ColorTheme';
import Home from './components/Home';

function App() {
  // States
  const [ inputText, setInputText ] = useState("");
  const [ inputTextArea, setInputTextArea ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  const [ colorTheme, setColorTheme ] = useState("theme-white");

  // Navbar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // USE EFFECT
  useEffect( () => {
    filterHandler();
  }); // [ todos, status ]

  useEffect(() => {
    // Check for selected theme
    const currentThemeColor = localStorage.getItem('theme-color');
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // Functions
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break
      default:
        setFilteredTodos(todos);
        break
    }
  };


  return (
    <Router>
        <div className={`App ${colorTheme}`}>
          <ColorTheme
            setColorTheme={setColorTheme}
            colorTheme={colorTheme}
          />
          <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

            <Switch>
              <Route path="/todos/create">
                <Form
                    inputText={inputText}
                    inputTextArea={inputTextArea}
                    todos={todos}
                    setTodos={setTodos}
                    setInputText={setInputText}
                    setInputTextArea={setInputTextArea}
                    setStatus={setStatus}
                />

                <TodoList
                  filteredTodos={filteredTodos}
                  setTodos={setTodos}
                  todos={todos}
                />
              </Route>
              <Route path="/todos">
              </Route>
              <Route path="/description">
                <Description />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
