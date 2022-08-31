import { Grid } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Box } from "@mui/material";
import MyButton from "./MyButton";
import { ServiceCard } from "./Cards/ServiceCard";

// images import
import chargingImage from "../../assets/charging.png";
import solarPanelImage from "../../assets/solar-panel.png";
import electricGeneratorImage from "../../assets/electric-generator.png";
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import { navActions } from "../../redux/navSlice";
import { useDispatch } from "react-redux";

export const Services = ({ scrollingRef }) => {
  const dispatch = useDispatch();

  return (
    <Container ref={scrollingRef} style={{ scrollMarginTop: "4rem" }}>
      <Heading
        miniTitle="O nás"
        title="Jaké služby nabízíme?"
        miniTitleColor="var(--color-light-grey)"
        titleColor="var(--color-dark-blue)"
        variant="h4"
      />

      <Grid container pb={6} spacing={5} data-aos="fade-up">
        <Grid item xs={12} md={4}>
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás."
            title="Fotovoltaické elektrárny"
            image={solarPanelImage}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="50">
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vás."
            title="Nabíjecí stanice"
            image={chargingImage}
          />
        </Grid>
        <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="100">
          <ServiceCard
            text="Nabízíme kompletní řešení fotovoltaické elektrárny. Vše vyřesíme za Vás. Nabízíme kompletní řešení fotoektrárny. Vše vyřesíme za Vás."
            title="Full Back Up"
            image={electricGeneratorImage}
          />
        </Grid>
      </Grid>

      <Box textAlign="center" data-aos="fade-in" data-aos-delay="150">
        <Link to="/services">
          <MyButton
            text="Zjistit více"
            onClick={() => dispatch(navActions.linkServices())}
          />
        </Link>
      </Box>
    </Container>
  );
};
