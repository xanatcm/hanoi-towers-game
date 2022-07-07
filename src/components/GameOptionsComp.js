import { Row, Col, Button } from "react-bootstrap";
import React from "react";

const GameOptionsComp = ({ disks, setDisks, reset, solve }) => {
  return (
    <Row>
      <Col>
        <span>Discos: {disks}</span>
        <Button
          variant="outline-secondary"
          onClick={() => {
            setDisks((disks += 1));
          }}
        >
          +
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => {
            if (disks >= 2) {
              setDisks((disks -= 1));
            }
          }}
        >
          -
        </Button>
      </Col>
      <Col>
        <Button variant="outline-secondary" onClick={() => reset()}>
          Reiniciar
        </Button>
        <Button variant="outline-secondary" onClick={() => solve()}>
          Resolver
        </Button>
      </Col>
    </Row>
  );
};

export default GameOptionsComp;
