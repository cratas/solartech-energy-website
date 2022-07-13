import { React } from "react";
import classes from "./Home.module.css";
import { Container } from "react-bootstrap";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@material-ui/core";

import { IntroHeader } from "../../UI/IntroHeader";
import fotovoltaicHouse from "../../../assets/fotovoltaic.jpg";

import { Stats } from "../../UI/Stats";

const Home = () => {
  return (
    <>
      {/* Intro text */}
      <IntroHeader />

      <Box
        style={{
          background:
            "linear-gradient(0deg, var(--color-blue) 50%, var(--color-white) 50%)",
        }}
      >
        <Container>
          <Box className={classes.imageWrapper}>
            <div className={classes.rightTopDots}>sdfsd</div>
            <div className={classes.leftBottomDots}>sdfsd</div>

            <Avatar
              variant={"rounded"}
              alt="The image"
              src={fotovoltaicHouse}
              style={{
                width: "100%",
                height: "100%",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                zIndex: "0",
              }}
            />
          </Box>
        </Container>
      </Box>

      <Stats />

      <Box style={{ height: "2000px" }}></Box>
    </>
  );
};

export default Home;
