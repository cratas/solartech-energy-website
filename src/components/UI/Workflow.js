import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";

export const Workflow = () => {
  return (
    <Container style={{height: "500px"}}>
      <Heading
        miniTitle="Postup"
        title="Jak vypadá práce s námi?"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h4"
      />
    </Container>
  );
};
