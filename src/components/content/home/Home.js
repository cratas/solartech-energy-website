import { React } from "react";
import classes from "./Home.module.css";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Box } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <Box style={{height: "2000px"}}>
        <Typography variant="h3">Responsive h3</Typography>
      </Box>
    </Container>
  );
};

export default Home;
