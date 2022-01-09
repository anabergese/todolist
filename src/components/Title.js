import React from "react";
import Container from "react-bootstrap/container";
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => {
  const [titleTask, setTitleTask] = useState("");
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
        <Link to="/todos/create" className="button-go">
          ADD
        </Link>
      </form>
    </Container>
  );
};

export default Title;
