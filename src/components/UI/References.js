import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Grid } from "@mui/material";
import { ClientCard } from "./ClientCard";


export const References = () => {
  return (
    <Container>
      <Heading
        miniTitle="Reference"
        title="Co o nás říkají naši zákazníci?"
        variant="h4"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
      />

      <Grid container pb={6} spacing={5}>
        <Grid item xs={12} md={4}>
          <ClientCard

          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ClientCard

          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ClientCard

          />
        </Grid>
      </Grid>
    </Container>
  );
};
