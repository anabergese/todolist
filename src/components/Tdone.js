import React from "react";
import Container from "react-bootstrap/container";

const Tdone = ( { par } ) => {
  return (
      <Container>
      <div className="bar">
        <div htmlFor="title" className="subtitle">
          <h3>{par}</h3>
        </div>
        <button className="button-go">
          EDIT
        </button>
      </div>
    </Container>
  );
};

export default Tdone;
