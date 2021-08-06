import React from 'react';
// import { useForm } from 'react-hook-form';


const Form = ({ todos, setTodos, setInputText, inputText, setStatus, inputTextArea, setInputTextArea, inputFile, setInputFile }) => {

    const inputTextHandler = (e) => {
      setInputText(e.target.value);
    };

    const inputTextAreaHandler = (e) => {
      setInputTextArea(e.target.value);
    };

    const inputFileHandler = (e) => {
      setInputFile(e.target.value);
      console.log(e.target.value);
      // Console.log return this => File{name: "Captura de Pantalla 2021-07-25 a la(s) 0.11.43.png", lastModified: 1627164708807, lastModifiedDate…}
    };


    const submitTodoHandler = (e) => {
      e.preventDefault();
      setTodos([
          ...todos, { text: inputText, textarea: inputTextArea, file: inputFile, completed: false, id: Math.random() * 1000 }
        ])
      setInputText("");
      setInputTextArea("");
      setInputFile("");
    }

    const statusHandler = (e) => {
      setStatus(e.target.value);
    }


    return (
      <div>
        <form>
          <label>
          Title of task:
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            className="todo-input"
          />
          </label>
          <label>
          Write your steps here:
          <input
            value={inputTextArea}
            onChange={inputTextAreaHandler}
            type="textarea"
          />
          </label>
          <input
            value={inputFile}
            onChange={inputFileHandler}
            type="file"
          />
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
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
