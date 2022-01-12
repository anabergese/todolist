import React from "react";
import Container from "react-bootstrap/container";
import { useState } from "react";
import Tdone from "./Tdone";

const Title = () => {
  const [titleTask, setTitleTask] = useState("");
  const [tdone, setTdone] = useState("");


  const submitTitleHandler = (e) => {
     e.preventDefault();
     setTdone(titleTask);
  }

  return (
    <Container>
      <header>
        <h1>Create a new task</h1>
      </header>
      <form className="bar">
        <label htmlFor="title" className="subtitle">
          <input
            onChange={(e) => setTitleTask(e.target.value)}
            value={titleTask}
            type="text"
            placeholder="Write title of task here"
            id="title"
          />
        </label>
        <button
          className="button-go"
          onClick={submitTitleHandler}
        >
          ADD
        </button>
      </form>
       <Tdone par={tdone} />

    </Container>
  );
};

export default Title;
