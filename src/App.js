import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./switcher.scss";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

// Importing the Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Description from "./components/Description";
import ColorTheme from "./components/ColorTheme";
import Home from "./components/Home";
import Navigator from "./components/Navigator";

function App() {
  // States
  const [inputText, setInputText] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [colorTheme, setColorTheme] = useState("theme-white");

  // USE EFFECT
  useEffect(() => {
    filterHandler();
  }); // [ todos, status ]

  useEffect(() => {
    // Check for selected theme
    const currentThemeColor = localStorage.getItem("theme-color");
    // if found set selected theme value in state
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <Router>
      <div className={`App ${colorTheme}`}>
        <ColorTheme setColorTheme={setColorTheme} colorTheme={colorTheme} />
        <Navigator />

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
          <Route path="/todos"></Route>
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
