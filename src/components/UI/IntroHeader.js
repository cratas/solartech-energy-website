import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/system";
import { Typography, Divider } from "@mui/material";
import MyButton from "./MyButton";

export const IntroHeader = () => {
  return (
    <Container>
      {/* Into text */}
      <Box textAlign="center" pt={5}>
        <Typography
          variant="h1"
          color={"var(--color-light-blue)"}
          style={{ fontWeight: "bold" }}
        >
          Šetříme <span style={{ color: "var(--color-dark-blue)" }}>Vaše</span>
          <br />
           
          <span style={{ color: "var(--color-dark-blue)" }}>peníze za</span> elektřinu
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center">
        <Divider
          style={{
            width: "10%",
            opacity: "100%",
            height: "0.25rem",
            color: "var(--color-light-grey)",
            borderRadius: "2rem",
            margin: "1rem",
            border: "none"
          }}
        />
      </Box>

      <Box textAlign="center" pt={2} display={"flex"} justifyContent={"center"}>
        <Box maxWidth={"30rem"}>
          <Typography
            variant="p"
            fontWeight={"500"}
            color={"var(--color-grey)"}
          >
            Kompletní řešení fotovoltaických elektráren, které jsou schopny
            ušetřit Vám spoustu peněz, vyhnout se inflaci a v neposlední řadě
            přispět k lepšímu životnímu prostředí.
          </Typography>
        </Box>
      </Box>

      <Box textAlign="center" pt={5} pb={5}>
        <MyButton
          text="Zjistit více"
        />
      </Box>
    </Container>
  );
};
