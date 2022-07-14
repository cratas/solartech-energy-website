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
import { Heading } from "./Heading";

export const Services = () => {
  return (
    <Container>
      <Heading
        miniTitle="O nás"
        title="Jaké služby nabízíme?"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h4"
      />

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
        />
      </Box>
    </Container>
  );
};
