import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import { ClientCard } from "../../UI/Cards/ClientCard";
import { Heading } from "../../UI/Heading";

const Prices = () => {
  return (
    <Box backgroundColor="var(--color-dark-white)" pb={2}>
      <Container>
        <Heading
          miniTitle="Reference"
          title="Co o nás říkají naši zákazníci?"
          variant="h4"
          miniTitleColor="var(--color-light-grey)"
          titleColor="var(--color-dark-blue)"
        />

        <Grid container pb={6} spacing={4} data-aos="fade-up">
          <Grid item xs={12} md={4}>
            <ClientCard
              // image={menImageFirst}
              name="Kamil Kadur"
              city="Krmelín"
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="50">
            <ClientCard
              // image={menImageSecond}
              name="Jiří Palla"
              city="Příbor"
              isMiddle={true}
            />
          </Grid>
          <Grid item xs={12} md={4} data-aos="fade-up" data-aos-delay="150">
            <ClientCard
              // image={womanImage}
              name="Vlasta Brdová"
              city="Šumperk"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Prices;
