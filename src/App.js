import React, { useState, useEffect } from 'react';
import './App.scss';
import './switcher.scss'

// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';
import Description from './components/Description';

function App() {
  // States
  const [ inputText, setInputText ] = useState("");
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState("all");
  const [ filteredTodos, setFilteredTodos ] = useState([]);
  const [ colorTheme, setColorTheme ] = useState("theme-white");

  // USE EFFECT
  useEffect( () => {
    filterHandler();
  }, [ todos, status ]);

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

  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }

  return (
    <div className={`App ${colorTheme}`}>
      <div className="theme-options">
        <div
          onClick={() => {handleClick('theme-white')}}
          id="theme-white"
          className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-blue')}}
          id="theme-blue"
          className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}

        />
        <div
          onClick={() => {handleClick('theme-orange')}}
          id="theme-orange"
          className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-purple')}}
          id="theme-purple"
          className={`${colorTheme === 'theme-purple' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-green')}}
          id="theme-green"
          className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-black')}}
          id="theme-black"
          className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
        />
      </div>
      <header>
        <h1>What's the plan for today? </h1>
      </header>
      <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
      />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
      <Description />
    </div>
  );
}

export default App;
