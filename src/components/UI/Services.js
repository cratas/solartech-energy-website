import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { ServiceCard } from "./ServiceCard";
import MyButton from "./MyButton";

// images import
import chargingImage from "../../assets/charging.png";
import solarPanelImage from "../../assets/solar-panel.png";
import electricGeneratorImage from "../../assets/electric-generator.png";

export const Services = () => {
  return (
    <Container>
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        flexDirection="column"
        pt={6}
        pb={6}
      >
        <Typography variant="p" fontWeight="500" color="var(--color-yellow)">
          O nás
        </Typography>
        <Divider
          style={{
            width: "25px",
            opacity: "100%",
            height: "3px",
            color: "var(--color-yellow)",
            borderRadius: "2rem",
            margin: "5px",
          }}
        />
        <Typography
          variant="h4"
          color="var(--color-blue)"
          style={{ fontWeight: "bold" }}
        >
          Jaké služby nabízíme?
        </Typography>
      </Box>

      <Grid container pb={6} spacing={5}>
        <Grid item xs={12} md={4}>
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás."
            title="Fotovoltaické elektrárny"
            image={solarPanelImage}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vás."
            title="Nabíjecí stanice"
            image={chargingImage}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotoektrárny. Vše vyřesíme za Vás."
            title="Full Back Up"
            image={electricGeneratorImage}
          />
        </Grid>
      </Grid>

      <Box textAlign="center">
        <MyButton
          text="Zjistit více"
          style={{
            backgroundColor: "var(--color-yellow)",
            border: "var(--color-yellow)",
            color: "var(--color-blue)",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          }}
        />
      </Box>

    </Container>
  );
};
