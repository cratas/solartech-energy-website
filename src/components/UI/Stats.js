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
            <StatComponent mainText="100 +" title="SPOKOJENÝCH ZÁKAZNÍKŮ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="2 +" title="LET ZKUŠENOSTÍ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="150" title="VYHOTOVENÝCH PROJEKTŮ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <StatComponent mainText="100 %" title="FÉROVOST A SPOLEHLIVOST" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
