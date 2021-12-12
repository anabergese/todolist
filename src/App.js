import React, { useState, useEffect } from 'react';
import './App.scss';
import './switcher.scss'


// Importing the Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Description from './components/Description';
import ColorTheme from './components/ColorTheme';

function App() {
  // States
  const [ inputText, setInputText ] = useState("");
  const [ inputTextArea, setInputTextArea ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  const [ colorTheme, setColorTheme ] = useState("theme-white");


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
    <div className={`App ${colorTheme}`}>
      <ColorTheme
        setColorTheme={setColorTheme}
        colorTheme={colorTheme}
      />
      <header>
        <h1>What's the plan for today? </h1>
      </header>
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
      <Description />
    </div>
  );
}

export default App;
