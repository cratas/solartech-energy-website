import React from "react";
import { Grid, Box } from "@mui/material";
import { Container } from "react-bootstrap";
import StatComponent from "./StatComponent";

export const Stats = () => {
  return (
    <Box backgroundColor="var(--color-dark-blue)" pt={6} pb={6}>
      <Container>
        <Grid container>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="100 +" title="Spokojených zákazníků" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="2 +" title="Let zkušeností" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="150" title="Vyhotovených projektů" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="100 %" title="Férovost a spolehlivost" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
