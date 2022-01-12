import React, { useState } from "react";
// import { useForm } from 'react-hook-form';

const Form = ({
  todos,
  setTodos,
  setInputText,
  inputText,
  setStatus,
  inputTextArea,
  setInputTextArea,
}) => {
  const [file, setInputFile] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputTextAreaHandler = (e) => {
    setInputTextArea(e.target.value);
  };

  const inputFileHandler = (e) => {
    const selectedFile = e.target.files[0];
    setInputFile(selectedFile);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        textarea: inputTextArea,
        file: file,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
    setInputTextArea("");
    setInputFile();
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <header>
        <h1>Create a new task</h1>
      </header>
      <form>
        <label>
          <p>Title of task:</p>
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
        </label>
        <label>
          <p>Write your steps here:</p>
          <input
            value={inputTextArea}
            onChange={inputTextAreaHandler}
            type="textarea"
          />
        </label>
        <input
          className="file"
          onChange={inputFileHandler}
          type="file"
          name="file"
        />
        <button
          onClick={submitTodoHandler}
          className="todo-button"
          type="submit"
        >
          ADD <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
