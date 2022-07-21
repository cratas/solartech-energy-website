import React from "react";
import { Container } from "react-bootstrap";
import { Heading } from "./Heading";
import { Grid, Box } from "@mui/material";
import { ClientCard } from "./Cards/ClientCard";

import menImageFirst from "../../assets/man-1.png";
import menImageSecond from "../../assets/man-2.png";
import womanImage from "../../assets/woman-1.png";

export const References = () => {
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

        <Grid container pb={6} spacing={4}>
          <Grid item xs={12} md={4}>
            <ClientCard
              image={menImageFirst}
              name="Kamil Kadur"
              city="Krmelín"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClientCard
              image={menImageSecond}
              name="Jiří Palla"
              city="Příbor"
              isMiddle={true}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <ClientCard
              image={womanImage}
              name="Vlasta Brdová"
              city="Šumperk"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
