import React from "react";
import { Box } from "@mui/system";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";

export const FormWrapper = () => {
  return (
    <Box backgroundColor="var(--color-light-blue)" pb={5} mt={5}>
      <Container>
        <Heading miniTitle="Formulář" title="Kontaktní formulář" miniTitleColor="var(--color-light-grey)" titleColor="var(--color-white)" variant="h5"/>
      </Container>
    </Box>
  );
};
