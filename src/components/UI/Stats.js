import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import { Container } from "react-bootstrap";

const Item = ({ mainText, title }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      margin="1rem 0"
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
    <Box backgroundColor="var(--color-blue)" pt={6} pb={6}>
      <Container>
        <Grid container>
          <Grid item xs={6} md={3} >
            <Item mainText="100 +" title="SPOKOJENÝCH ZÁKAZNÍKŮ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <Item mainText="2 +" title="LET ZKUŠENOSTÍ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <Item mainText="150" title="VYHOTOVENÝCH PROJEKTŮ" />
          </Grid>
          <Grid item xs={6} md={3}>
            <Item mainText="100 %" title="FÉROVOST A SPOLEHLIVOST" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
