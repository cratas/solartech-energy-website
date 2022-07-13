import React from "react";
import { Grid, Box, Paper, Typography } from "@mui/material";
import { Container } from "react-bootstrap";

const Item = ({ mainText, title }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography variant="h2" fontWeight="bold" color="var(--color-yellow)">
        {mainText}
      </Typography>
      <Typography variant="p" fontWeight="500" color="var(--color-white-dark)">
        {title}
      </Typography>
    </Box>
  );
};

export const Stats = () => {
  return (
    <Box backgroundColor="var(--color-blue)" pt={5} pb={5}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Item mainText="100 +" title="Spokojených zákazníků" />
          </Grid>
          <Grid item xs={3}>
            <Item mainText="2 +" title="Let zkušeností" />
          </Grid>
          <Grid item xs={3}>
            <Item mainText="150" title="Vyhotovených projektů" />
          </Grid>
          <Grid item xs={3}>
            <Item mainText="100 %" title="Férovost a spolehlivost" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
