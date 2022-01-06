import React from 'react';
import Container from 'react-bootstrap/container';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <Container>
    <div className="home">
      <div>
        <h1>What's the plan for today?</h1>
      </div>
      <div className="bar">
        <div className="subtitle">See all tasks</div>
        <Link to="/todos" className="button-go">
            Go >
        </Link>
      </div>
      <div className="bar">
        <div className="subtitle">Create a new tasks</div>
        <Link to="/todos/create" className="button-go">
            Go >
        </Link>
      </div>
    </div>
  </Container>
  );
};

export default Home;
