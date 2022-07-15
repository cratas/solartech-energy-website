import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { Avatar } from "@mui/material";
import logoWhiteImage from "../../assets/logo-white.png";
import classes from "../navbar/NavbarContainer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <Box
      backgroundColor="var(--color-dark-blue)"
      position={"relative"}
      pt={5}
      pb={7}
    >
      <Container>
        <Box width="100%" textAlign="center">
          <img
            src={logoWhiteImage}
            className={classes.logo}
            alt="logo"
            style={{ width: "15rem" }}
          />
        </Box>

        <Box textAlign="center" mb={4} mt={2}>
          <Typography
            variant="p"
            color="var(--color-white)"
            style={{ marginRight: "2rem", cursor: "pointer" }}
          >
            Úvod
          </Typography>
          <Typography
            variant="p"
            color="var(--color-white)"
            style={{ marginRight: "2rem" }}
          >
            Dotace
          </Typography>
          <Typography
            variant="p"
            color="var(--color-white)"
            style={{ marginRight: "2rem" }}
          >
            Služby
          </Typography>
          <Typography variant="p" color="var(--color-white)">
            Kontakt
          </Typography>
        </Box>

        <Divider
          style={{
            opacity: "30%",
            backgroundColor: "var(--color-light-grey)",
            margin: "1rem 0",
          }}
        />
        <Box
          display="flex"
          flexDirection={{xs: "column", sm: "row"}}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography variant="p" color="var(--color-light-grey)">
            Copyright © 2022 Blitztech s.r.o.
          </Typography>
          <Box mt={{xs: "1rem", sm: "0"}}>
            <SocialIcon
              url="https://instagram.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35, marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://facebook.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35, marginRight: "1rem" }}
            />
            <SocialIcon
              url="https://email.com/in/jaketrent"
              bgColor="var(--color-white)"
              style={{ height: 35, width: 35 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
